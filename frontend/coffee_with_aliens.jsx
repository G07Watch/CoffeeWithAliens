import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';
import {fetchCoffeeTimes, fetchCoffeeTime } from './util/coffee_api_util';
import { fetchStarSystems } from './actions/star_system_actions';
import { fetchHosts } from './util/host_api_util';

document.addEventListener('DOMContentLoaded', () => {

  //TEST ONLY
  fetchStarSystems; fetchHosts;
  //TEST ONLY

  let store;
  if (window.currentUser) {
  const preloadedState = {
    entities: {
    },
      session: {
      currentUser: window.currentUser
    }
      };
  store = configureStore(preloadedState);
  delete window.currentUser;
  } else {
  store = configureStore();
  }

  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
})