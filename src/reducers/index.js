import { combineReducers } from 'redux';
import defaultAppState from './defaultAppState';
import * as c  from '../constants/ActionTypes';

const appReducer = combineReducers({
  defaultAppState
});

const rootReducer = (state, action) => {
  if (action.type === c.APP_RESET) {
    // Only thing required from state is routing for an app reset
    const { routing } = state;
    state = { routing };
  }

  return appReducer(state, action);
};

export default rootReducer;
