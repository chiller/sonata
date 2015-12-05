"use strict"

let chai = require('chai'),
  path = require('path');

chai.should();

import {
    list, cons, head, tail, isEmpty, show
} from "../lib/framework.js";

import {
    lastButOne
} from "../lib/e2.js";

describe('#1 Last element of list', () => {
  describe('1,2,3,4', () => {
    let xs = list(1,2,3,4)

    it('3', () => lastButOne(xs).should.equal(4))
  });

});
