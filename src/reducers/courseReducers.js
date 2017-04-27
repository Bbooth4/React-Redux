import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducers(state = initialState.courses, action) {
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