import * as types from '../constants/ActionTypes';

export function triggerDefaultAction(settings) {
  return { type: types.DEFAULT_ACTION, settings };
}

