import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import productsList from './products';

const defaultState = {
  user: null,
  products: productsList
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, user: action.payload }
    case 'LOG_OUT':
      return { ...state, user: null }
    default:
      return state
  }
}
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
