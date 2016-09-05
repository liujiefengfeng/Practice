import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import reducers from '../js/reducers/index';
import ApplicationContainer from '../container/applicationContainer';
import Welcome  from './welcome';

const store = createStore(reducers, {}, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ApplicationContainer}></Route>
      <Route path="welcome" component={Welcome}></Route>
    </Router>
  </Provider>
), document.getElementById('app'));
