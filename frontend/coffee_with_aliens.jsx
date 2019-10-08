import React from 'react'
import ReactDOM from 'react-dom'
import * as SessionApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  SessionApiUtil.signup; SessionApiUtil.login; SessionApiUtil.logout;

  
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Coffee with Aliens</h1>, root)
})