import React from 'react'
import ReactDOM from 'react-dom'
import { TodosStore, createTodosStore } from './stores'
import { InputsStore, createInputsStore } from './stores'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

const Main = () => (
  <TodosStore.Provider value={createTodosStore()}>
    <InputsStore.Provider value={createInputsStore()}>
      <App />
    </InputsStore.Provider>
  </TodosStore.Provider>
)

ReactDOM.render(<Main />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
