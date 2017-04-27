import * as types from '../actions/actionTypes';

export default function courseReducers(state = [], action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses; 
      // the above replaces what used to be taken from the state below
      // return [
      //   ...state,
      //   Object.assign({}, action.course)
      // ];
    // break;
    
    default:
      return state; 
  }
}