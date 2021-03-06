import * as c from '../constants/ActionTypes';

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

