//import apiMiddleware from '../middleware/api';
//
//const middlewares = [apiMiddleware];
///**
// * Creates a mock of Redux store with middleware.
// */
//function mockStore(getState, expectedActions, onLastAction) {
//  if (!Array.isArray(expectedActions)) {
//    throw new Error('expectedActions should be an array of expected actions.');
//  }
//  if (typeof onLastAction !== 'undefined' && typeof onLastAction !== 'function') {
//    throw new Error('onLastAction should either be undefined or function.');
//  }
//
//  function mockStoreWithoutMiddleware() {
//    return {
//      getState() {
//        return typeof getState === 'function' ?
//          getState() :
//          getState;
//      },
//
//      dispatch(action) {
//        const expectedAction = expectedActions.shift();
//        expect(action).toEqual(expectedAction);
//        if (onLastAction && !expectedActions.length) {
//          onLastAction();
//        }
//        return action;
//      }
//    };
//  }
//
//  const mockStoreWithMiddleware = applyMiddleware(
//    ...middlewares
//  )(mockStoreWithoutMiddleware);
//
//  return mockStoreWithMiddleware();
//}
//
//describe('action creators', () => {
//  afterEach(() => {
//    nock.cleanAll();
//  });
//
//  it('creates signup actions', (done) => {
//    // mock requests you need in this test
//    nock('http://localhost:3000/')
//      .get('/signup')
//      .reply(200);
//
//    const expectedActions = [
//      { type: 'SIGNUP_REQUEST' },
//      { type: 'SIGNUP_SUCCESS', payload: { /* ... */ } }
//    ];
//    const mockState = {
//      something: 42
//    };
//
//    const mockStore = createMockStore(mockState, expectedActions, done);
//    mockStore.dispatch(signup());
//  });
//});
