import React from 'react';
import {connect} from 'react-redux';
import VerticalNav from '../components/VerticalNav.jsx';
import CustomizedInput from '../components/CustomizedInput.jsx';
import SearchIcon from "@material-ui/icons/search";
import Card from './style/card.svg';
import {searchByCard} from "../actions";
import {func, object} from "prop-types";

class Search extends React.Component {

  clickSearch = () => {
    const value = this.state.userInput;
    this.props.clickSearch(value);
  };

  userInputValue = (event) => {
    const userInputValue = event.target.value;
    this.setState({userInput: userInputValue})
  };

  render() {
    return (
      <div className="search-page">
        <VerticalNav/>
        <div className="search-page_input-box">
          <CustomizedInput onChangeValue={this.userInputValue}/>
          <div className="search-page_input-box_icon" onClick={this.clickSearch}>
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

Search.propTypes = {
  clickSearch: func,
  searchPage: object
};

const mapStateToProps = state => {
  return {searchPage: state.searchPage};
};

const mapDispatchToProps = dispatch => ({
  clickSearch: cardNumber => dispatch(searchByCard(cardNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);