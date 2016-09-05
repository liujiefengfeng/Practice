import { combineReducers } from 'redux'
import filterTab from './tabBar'

const cruise = combineReducers({activeBar:filterTab});

export default cruise