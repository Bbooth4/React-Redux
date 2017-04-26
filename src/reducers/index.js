import { combineReducers } from 'redux';
import courses from './courseReducers';

// below are objects, but if all the same then keeping them as individuals is fine 
// the name of what is within the rootReducer is what you call in mapStateToProps
const rootReducer = combineReducers({
  courses
});

export default rootReducer;