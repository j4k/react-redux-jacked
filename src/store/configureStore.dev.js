/* eslint-disable no-console */
// The actual stores are in /reducers.
import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import middleware from '../middleware/middleware';

function logger({ getState }) {
  return (next) => (action) => {
    console.log('Will dispatch: ', action);

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action);

    console.log('State after dispatch: ', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

export default function configureStore(initialState) {
  let store;

  if (window.devToolsExtension) { //Enable Redux devtools if the extension is installed in developer's browser
    store = compose(
      middleware(logger),
      window.devToolsExtension()
    )(createStore)(rootReducer, initialState);
  } else {
    store = compose(
      middleware(logger)
    )(createStore)(rootReducer, initialState);
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
