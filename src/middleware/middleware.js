import { applyMiddleware } from 'redux';
import callApiMiddleware from './callApiMiddleware';

/**
 * Apply Global Middleware here
 */
export default function middleware(...additionalMiddleware) {
  return applyMiddleware(callApiMiddleware, ...additionalMiddleware);
}
