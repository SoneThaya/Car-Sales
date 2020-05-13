import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { carReducer } from '../src/reducer/carReducer'

import logger from 'redux-logger';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carReducer, applyMiddleware(logger))
console.log(store.getState())

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootElement);
