import {DEFAULT_ACTION} from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
  defaultValue: 0
};

export default function defaultAppState(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, { defaultValue: 0 });

    default:
      return state;
  }
}
