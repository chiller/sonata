"use strict"
let chai = require('chai'),
  path = require('path');

chai.should();

import {
    list, cons, head, tail, isEmpty, show
} from "../lib/framework.js";

import {last} from "../lib/e1.js";

describe('#1 Last element of 1,2,3,4', () => {
  let xs = list(1,2,3,4)
  it('is 4', () => last(xs).should.equal(4) );
});

