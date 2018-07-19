//@flow
import { createStore } from 'redux'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

const configureStore = () =>createStore(todos, ['Use Redux'])

export default configureStore
