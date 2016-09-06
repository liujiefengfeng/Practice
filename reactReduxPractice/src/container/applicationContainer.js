import { connect } from 'react-redux'
import {filterTab} from '../js/actions'
import Application from '../components/application'

const mapStateToProps = (state) => {
  return {
    activeBar: state.activeBar
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTabClick: (tabBar) => {
      dispatch(filterTab(tabBar))
    }
  }
};

const ApplicationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);

export default ApplicationContainer