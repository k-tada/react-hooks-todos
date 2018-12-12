import { createContext, useContext, useReducer } from 'react'
import mirror from 'key-mirror'
import { dispatchWithLog } from './index'

export const Store = createContext({
  todos: [],
})

export const actions = mirror({
  ADD_TODO: null,
  COMPLETE_TODO: null,
})

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      if (!action.payload || state.todos.includes(action.payload)) {
        return state
      }
      return { ...state, todos: [...state.todos, action.payload] }
    case actions.COMPLETE_TODO:
      return { ...state, todos: state.todos.filter(t => t !== action.payload) }
    default:
      return state
  }
}

export const createStore = () => {
  const [state, dispatch] = useReducer(reducer, useContext(Store))
  return {
    state,
    dispatch: dispatchWithLog(dispatch, state, reducer),
  }
}
