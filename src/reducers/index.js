import { combineReducers } from 'redux';
import defaultAppState from './defaultAppState';

const appReducer = combineReducers({
  defaultAppState
});

const rootReducer = (state, action) => {
  if (action.type === 'APP_RESET') {
    // Only thing required from state is routing for a reset
    const { routing } = state;
    state = { routing };
  }

  return appReducer(state, action)
};

export default rootReducer;
