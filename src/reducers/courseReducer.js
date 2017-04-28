import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
      // the above replaces what used to be taken from the state below
      // return [
      //   ...state,
      //   Object.assign({}, action.course)
      // ];
    // break;

    case types.CREATE_COURSE_SUCCESS:
      return [
          ...state,
          Object.assign({},
          action.course)
        ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
          ...state.filter(course => course.id !== action.course.id),
          Object.assign({},
          action.course)
        ];
    
    default:
      return state; 
  }
}

// needed to filter everything but the state of the course that needs to be updated