import authorApi from '../api/mockCourseApi';
import * as types from './actionTypes';

export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHOR_SUCCESS, authors };
}

export function loadAuthors() {
  return function(dispatch) {
    return courseApi.getAllCourses()
    .then(authors => {
      dispatch(loadAuthorSuccess(authors));
    })
    .catch(err => { console.error(err); });
  };
}
