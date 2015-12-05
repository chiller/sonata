"use strict"
let chai = require('chai'),
  path = require('path');

chai.should();

import {
    list, cons, head, tail, isEmpty, show
} from "../lib/framework.js";

import {reverse} from "../lib/e5.js";

describe('#5 Reverse a list', () => {
  let xs = list(1,2,3,4)
  it('', () => {
      reverse(list()).should.deep.equal(list())
      reverse(xs).should.deep.equal(list(4,3,2,1))
  });
});

