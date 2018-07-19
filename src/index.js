// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './configureStore'
import { BrowserRouter as Router } from 'react-router-dom'

const store = configureStore()
const element: any = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  element
)
