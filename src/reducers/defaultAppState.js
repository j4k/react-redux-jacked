import {DEFAULT_ACTION} from '../constants/ActionTypes';

const initialState = {
  defaultValue: 0
};

export default function defaultAppState(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      // For this example, just simulating a save by changing date modified.
      return Object.assign({}, state, { defaultValue: 0 });

    default:
      return state;
  }
}
