import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import middleware from '../middleware/middleware';

export default function configureStore(initialState) {
  return compose(
    middleware()
  )(createStore)(rootReducer, initialState);
}
