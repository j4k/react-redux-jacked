import { applyMiddleware } from 'redux';
import callApiMiddleware from './callApiMiddleware';

export default function middleware(...additionalMiddleware) {
  return applyMiddleware(callApiMiddleware, additionalMiddleware);
}
