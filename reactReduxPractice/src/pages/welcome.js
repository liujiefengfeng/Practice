import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        {'this is welcome page'}
        <div>
          <Link to="/">{'back'}</Link>
        </div>
      </div>
    )
  }
};