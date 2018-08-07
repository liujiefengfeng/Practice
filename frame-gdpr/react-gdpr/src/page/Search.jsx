import React from 'react';
import VerticalNav from '../components/VerticalNav.jsx';
import CustomizedInput from '../components/CustomizedInput.jsx';
import SearchIcon from "@material-ui/icons/search";
import Card from './style/card.svg';

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
        <div className="search-page_card-pic">
          <img className="card-picture" src={Card}/>
        </div>
      </div>
    );
  }
}

export default Search;