import React from 'react';
import ReactDOM from 'react-dom';
import Search from './page/Search.jsx';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Search/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));