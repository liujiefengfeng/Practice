import React from 'react';
import VerticalNav from '../components/VerticalNav.jsx';
import CustomizedInput from '../components/CustomizedInput.jsx';
import SearchIcon from "@material-ui/icons/search";

class Search extends React.Component {

  render() {
    return (
      <div className="search-page">
        <VerticalNav/>
        <div className="search-page_input-box">
          <CustomizedInput/>
          <div className="search-page_input-box_icon">
            <SearchIcon/>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;