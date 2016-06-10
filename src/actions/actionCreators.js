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
export const addTodo = makeActionCreator(c.DEFAULT_ACTION, 'todo');
export const editTodo = makeActionCreator(c.DEFAULT_ACTION, 'id', 'todo');
export const removeTodo = makeActionCreator(c.DEFAULT_ACTION, 'id');

/**
 * API Calling Action Creators
 */
export function loadPosts(userId) {
  return {
    types: ['LOAD_POSTS_REQUEST', 'LOAD_POSTS_SUCCESS', 'LOAD_POSTS_FAILURE'],
    shouldCallAPI: (state) => !state.posts[userId],
    callAPI: () => fetch(`http://myapi.com/users/${userId}/posts`),
    payload: { userId }
  };
}

export function triggerDefaultAction(settings) {
  return { type: c.DEFAULT_ACTION, settings };
}

