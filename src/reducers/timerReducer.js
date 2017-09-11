import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function timerReducer(state = initialState.timer, action) {
  switch (action.type) {
    case types.LOAD_TIMER:
      return action.courses;

    case types.START_TIMER:
      return [
        ...state,
        Object.assign({}, action.timer)
      ];

    case types.END_TIMER:
      return [
        ...state.filter(timer => timer.id !== action.timer.id),
        Object.assign({}, action.timer)
      ];

    default:
      return state;
  }
}