"use strict"
let chai = require('chai'),
  path = require('path');

chai.should();

import {
    list, cons, head, tail, isEmpty, show
} from "../lib/framework.js";

import {compress} from "../lib/e8.js";

describe('#8 Remove consecutive duplicates', () => {
  it('works on empty list', () => {
      compress(list()).should.deep.equal(list())
  });
  it('works on a list without duplicates', () => {
      compress(list(1,2,3)).should.deep.equal(list(1,2,3))
  });
  it('works on a list with duplicates', () => {
      compress(list(1,1,1,2,2,2,1,1,3,3,3,3)).should.deep.equal(list(1,2,1,3))
  });
});

