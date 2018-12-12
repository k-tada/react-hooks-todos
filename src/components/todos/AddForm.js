import React, { useContext } from "react"
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'
import { TodosStore, InputsStore, actions } from "../../stores"

const Form = styled.div`
  & {
    align-items: stretch;
    padding: 5px;
    display: flex;
  }
`

const TodoInputForm = styled(TextField)`
  && {
    margin: 5px;
  }
`
const TodoAddButton = styled(Button)`
  && {
    margin: 5px;
  }
`


export default function AddForm() {
  const todosContext = useContext(TodosStore)
  const inputsContext = useContext(InputsStore)

  function handleTodoChange(e) {
    inputsContext.dispatch({ type: actions.UPDATE_INPUT_VALUE, payload: e.target.value })
  }

  function handleTodoAdd() {
    const { state } = inputsContext
    if (!state.inputs) {
      return alert('Input todo name!')
    }
    todosContext.dispatch({ type: actions.ADD_TODO, payload: state.inputs })
    inputsContext.dispatch({ type: actions.UPDATE_INPUT_VALUE, payload: '' })
  }

  function handleSubmitForm(e) {
    if (e.keyCode === 13) handleTodoAdd()
  }

  return (
    <Form>
      <TodoInputForm
        id="add-todo"
        label="Todo Name"
        value={inputsContext.state.inputs}
        placeholder="Enter new todo"
        onKeyUp={handleSubmitForm}
        onChange={handleTodoChange}
        fullWidth
      />
      <TodoAddButton color="primary" onClick={handleTodoAdd}>
        Add
      </TodoAddButton>
    </Form>
  )
}
