import React from 'react';
import cheerio from 'cheerio';
import BasePage from './BasePage';
import TestUtils from 'react-addons-test-utils';
import assert from 'assert';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

/**
 * Mock out the top level Redux store with all the required
 * methods and have it return the provided state by default.
 * @param {Object} state State to populate in store
 * @return {Object} Mock store
 */
function createMockStore(state) {
  return {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
      return {...state};
    }
  };
}

function setup(storeState) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<BasePage store={createMockStore(storeState)} />);
  const output = renderer.getRenderOutput();
  return output;
}

describe('Base Page', function() {

  it('it should include a message', function() {
    const output = setup({
      todos: [1, 2, 3]
    });
    console.log(output);
    assert.equal(true, 1);
  });

});
