"use strict"
let chai = require('chai'),
  path = require('path');

chai.should();

import {
    list, cons, head, tail, isEmpty, show
} from "../lib/framework.js";

import {count} from "../lib/e4.js";

describe('#4 Number of elements in a list ', () => {
  let xs = list(1,2,3,4)
  it('', () => {
      count(list()).should.equal(0)
      count(list(1,2)).should.equal(2)
      count(xs).should.equal(4)
  });
});

