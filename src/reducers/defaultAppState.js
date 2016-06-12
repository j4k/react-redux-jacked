import {DEFAULT_ACTION} from '../constants/ActionTypes';
import * as c from '../constants/ActionTypes';

const initialState = {
  defaultValue: 0
};

export default function defaultAppState(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return {...state, defaultValue: 0};

    default:
      return state;
  }
}
