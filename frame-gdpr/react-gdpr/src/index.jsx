import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class HelloWorld extends React.Component {
  render() {
    return (
      <div id='hello-world'>Hello World!</div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));