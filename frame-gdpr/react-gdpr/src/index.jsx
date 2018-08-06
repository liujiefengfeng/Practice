import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Search from './page/Search.jsx';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton label="Test Material-ui"/>
        <Search/>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));