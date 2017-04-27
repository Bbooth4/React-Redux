import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
// the below loads the loadCourses() function from the courseActions export
import { loadCourses } from './actions/courseActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
// displays the courses
store.dispatch(loadCourses());

// IndexRoute is the defauled for the route it is within
render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);