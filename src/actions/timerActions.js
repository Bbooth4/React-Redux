import * as types from './actionTypes';
import TimerApi from '../api/mockTimer';
import { beginAjaxCall } from './ajaxStatusActions';

export function startTimerSuccess(time) {
  return {type: types.START_TIMER, time};
}

export function endTimerSuccess(time) {
  return {type: types.END_TIMER, time};
}

export function loadTimerSuccess(time) {
  return {type: types.LOAD_TIMER, time};
}

export function loadTimers() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return TimerApi.getAllTimers().then(timers => {
      dispatch(loadTimersSuccess(timers));
    }).catch(error => {
      throw(error);
    });
  };
}