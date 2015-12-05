"use strict"
let chai = require('chai'),
  path = require('path');

chai.should();

import {
    list, cons, head, tail, isEmpty, show
} from "../lib/framework.js";

import {flatten} from "../lib/e7.js";

describe('#7 Flatten a nested list', () => {
  it('leaves a flat list unchanged', () => {
      flatten(list(1,2,3)).should.deep.equal(list(1,2,3))
  });
  it('flattens a list of lists', () => {
      flatten(
        list(list(1,2),list(3))
      ).should.deep.equal(list(1,2,3))
  });
  it('flattens a list of lists of any depth', () => {
      flatten(
        list(list(1,list(list(2))),list(3))
      ).should.deep.equal(list(1,2,3))
  });
});

