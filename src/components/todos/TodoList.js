import React, { useContext, Fragment } from "react"
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Divider,
} from '@material-ui/core'
import { TodosStore, actions } from "../../stores"
import styled from 'styled-components'

const Contents = styled.div`
  & {
    flex: 1;
    border-top: 1px solid #ddd;
    margin-top: 10px;
    padding: 10px;
  }
`

const EmptyMessage = styled.div`
  & {
    font-size: 18px;
    color: #aaa;
    padding: 10px;
  }
`

export default function TodoList() {
  const { state, dispatch } = useContext(TodosStore)

  return (
    <Contents>
      {state.todos.length === 0 ? (
        <EmptyMessage>No todos...</EmptyMessage>
      ) : (
        <List>
          {state.todos.map(t => (
            <Fragment key={`${t}--fragment`}>
              <ListItem key={`${t}--list`}>
                <ListItemText primary={t} />
                <ListItemSecondaryAction>
                  <Button
                    color="secondary"
                    onClick={() => dispatch({ type: actions.COMPLETE_TODO, payload: t })}
                  >Complete</Button>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider key={`${t}--divider`} />
            </Fragment>
          ))}
        </List>
      )}
    </Contents>
  )
}
