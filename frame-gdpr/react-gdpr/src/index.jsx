import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter, Route} from 'react-router-dom';
import reactGDPR from "./reducers";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import Search from './page/Search.jsx';
import './index.scss';

const store = createStore(reactGDPR, composeWithDevTools(applyMiddleware(thunk)));

const HelloWorld = () => (<div>Hello World</div>);

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HelloWorld}/>
          <Route exact path="/search" component={Search}/>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);