import { createContext, useContext, useReducer } from 'react'
import mirror from 'key-mirror'
import { dispatchWithLog } from './index'

export const Store = createContext({
  inputs: '',
})

export const actions = mirror({
  UPDATE_INPUT_VALUE: null,
})

const reducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_INPUT_VALUE:
      return { ...state, inputs: action.payload }
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
