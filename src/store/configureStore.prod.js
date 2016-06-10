import { createStore } from 'redux';
import rootReducer from '../reducers';
import middleware from '../middleware/middleware';

export default function configureStore(initialState) {
  return createStore()(rootReducer, initialState);
}
