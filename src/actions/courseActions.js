// needed to attach to the mockApi, which simulates using a database 
import courseApi from '../api/mockCourseApi';
import * as types from './actionTypes';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
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

export function saveCourse(course) {
  return function(dispatch, getState) {
    return courseApi.saveCourse(course)
    .then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    })
    .catch(err => { console.error(err); });
  };
}

// getState is useful when you want to access the redux store but don't want to pass it in as a parameter 