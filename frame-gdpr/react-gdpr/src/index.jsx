import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {searchPage} from "./reducers";
import {Provider} from 'react-redux'
import Search from './page/Search.jsx';
import './index.scss';

const store = createStore(searchPage);

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