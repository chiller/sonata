"use strict"
let chai = require('chai'),
  path = require('path');

chai.should();

import {
    list, cons, head, tail, isEmpty, show
} from "../lib/framework.js";

import {elementAt} from "../lib/e3.js";

describe('Problems', () => {
  describe('#3 Kth element of a list', () => {
    let xs = list(1,2,3,4)
    it('', () => {
        elementAt(0, xs).should.equal(1)
        elementAt(2, xs).should.equal(3)
        elementAt(3, xs).should.equal(4)
    });
  });

});
