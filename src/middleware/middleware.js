import { applyMiddleware } from 'redux';
import callApiMiddleware from './callApiMiddleware';
import thunk from 'redux-thunk';

/**
 * Apply Global Middleware here
 */
export default function middleware(...environmentSpecificMiddleware) {
  return applyMiddleware(thunk, callApiMiddleware, ...environmentSpecificMiddleware);
}
