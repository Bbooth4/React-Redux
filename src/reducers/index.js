import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

// below are objects, but if all the same then keeping them as individuals is fine 
// the name of what is within the rootReducer is what you call in mapStateToProps
const rootReducer = combineReducers({
  courses, 
  authors
});

export default rootReducer;