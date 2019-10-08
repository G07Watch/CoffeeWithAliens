import React from 'react'
import ReactDOM from 'react-dom'
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  SessionApiUtil.signup; SessionApiUtil.login; SessionApiUtil.logout;

  const store = configureStore();

  //TEST PURPOSES ONLY
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TEST PURPOSES ONLY

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Coffee with Aliens</h1>, root)
})