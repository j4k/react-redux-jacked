import React from 'react';
import cheerio from 'cheerio';
import {BasePage} from './BasePage';
import assert from 'assert';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';

describe('Component::BasePage', () => {

  let component;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<BasePage />);
  });

  it("renders some text in a box with proper CSS classes", () => {
    const div = TestUtils.findRenderedDOMComponentWithTag(component, "div");

    expect(div.innerHTML).to.equal("Test more");
    assert(div.className, 'test-more');
  });

});
