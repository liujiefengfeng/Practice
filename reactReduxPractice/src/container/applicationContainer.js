import { connect } from 'react-redux'
import {filterTab} from '../js/actions'
import Application from '../components/application'

const mapStateToProps = (state) => {
  console.log(state, 'the state in the container');
  return {
    activeBar: state.activeBar
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTabClick: (tabBar) => {
      console.log(tabBar, 'the tabBar in the onTabClick call back');
      dispatch(filterTab(tabBar))
    }
  }
};

const ApplicationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);

export default ApplicationContainer