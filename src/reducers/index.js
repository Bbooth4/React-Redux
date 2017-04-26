import { combineReducers } from 'redux';
import courses from './courseReducer';

// below are objects, but if all the same then keeping them as individuals is fine 
const rootReducer = combineReducers({
  courses
})

export default rootReducer;