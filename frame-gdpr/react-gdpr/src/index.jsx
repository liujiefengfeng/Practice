import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Route, Link} from 'react-router-dom';
import {searchPage} from "./reducers";
import {Provider} from 'react-redux'
import {createBrowserHistory} from 'history';
import {ConnectedRouter, routerReducer, routerMiddleware,} from "react-router-redux";
import thunk from 'redux-thunk';
import Search from './page/Search.jsx';
import Detail from './page/Detail.jsx';
import './index.scss';

const browserHistory = createBrowserHistory();
const reactGDPRReducer = combineReducers({routerReducer, searchPage});
const middlewares = [thunk, routerMiddleware(browserHistory)];
const store = createStore(reactGDPRReducer, composeWithDevTools(applyMiddleware(...middlewares)));

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/"
               render={() => (<div><Link to="/search">Search</Link><Link to="/detail">Detail</Link></div>)}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/detail" component={Detail}/>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);