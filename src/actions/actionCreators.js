import * as c from '../constants/ActionTypes';

function makeActionCreator(type, ...argNames) {
  return function(...args) {
    let action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

/**
 * Standard Action Creators
 */
export const triggerDefaultAction = makeActionCreator(c.DEFAULT_ACTION, 'settings');
