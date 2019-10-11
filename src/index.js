import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  createStore,
  applyMiddleware
} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'

import MyList from './components/MyList';
import MyForm from './components/MyForm';
import * as serviceWorker from './serviceWorker';

// 増強
const enhancer = process.env.NODE_ENV === "development" ? 
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);

/**
 * actionをthunk化
 * recuderと結びつけて状態をstoreで管理
 */
const store = createStore(reducer,enhancer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route path="/" component={MyList}/>
      <Route path="/form" component={MyForm}/>
    </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
