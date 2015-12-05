"use strict"
let chai = require('chai'),
  path = require('path');

chai.should();

import {
    list, cons, head, tail, isEmpty, show
} from "../lib/framework.js";

import {isPalindrome} from "../lib/e6.js";

describe('#6 Is a list a palindrome', () => {
  it('', () => {
    isPalindrome(list(1)).should.be.true
    isPalindrome(list(1,2,2,1)).should.be.true
    isPalindrome(list(1,2,3,2,1)).should.be.true
    isPalindrome(list(2,3,2,1)).should.be.false
  });
});

