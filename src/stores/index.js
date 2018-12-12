import { actions as todoActions } from './todos'
import { actions as inputsActions } from './inputs'
export const actions = {
  ...todoActions,
  ...inputsActions,
}
export { Store as TodosStore, createStore as createTodosStore } from './todos'
export { Store as InputsStore, createStore as createInputsStore } from './inputs'

export const dispatchWithLog = (dispatch, state, reducer) => action => {
  console.group(`%caction %c${action.type}`, 'color: gray; font-weight: lighter;', 'color: inherit;')
  console.log(`%c prev state`, 'color: #9e9e9e; font-weight: bold;', state)
  console.log(`%c action    `, 'color: #03a9f4; font-weight: bold;', action)
  dispatch(action)
  console.log(`%c next state`, 'color: #4caf50; font-weight: bold;', reducer(state, action))
  console.groupEnd()
}
