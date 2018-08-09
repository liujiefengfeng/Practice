import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reactGDPR from "./reducers";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import Search from './page/Search.jsx';
import './index.scss';

const store = createStore(reactGDPR, composeWithDevTools(applyMiddleware(thunk)));

class App extends React.Component {
  render() {
    return (
      <div>
        <Search/>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);