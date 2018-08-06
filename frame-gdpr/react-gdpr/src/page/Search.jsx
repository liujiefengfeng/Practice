import React from 'react';
import VerticalNav from '../components/VerticalNav.jsx';
import CustomizedInput from '../components/CustomizedInput.jsx';

class Search extends React.Component {

  render() {
    return (
      <div>
        <VerticalNav/>
        <CustomizedInput/>
      </div>
    );
  }
}

export default Search;