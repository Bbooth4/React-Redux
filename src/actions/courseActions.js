import * as types from './actionTypes';
// needed to attach to the mockApi, which simulates using a database 
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses()
    .then(courses => {
      dispatch(loadCoursesSuccess(courses));
    })
    .catch(err => { console.error(err); });
  };
}

// frequently an error action for each thunk, like LOAD_COURSES_FAILURE