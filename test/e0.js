
let chai = require('chai'),
  path = require('path');

chai.should();

import {
    list, cons, head, tail, isEmpty, show,
    listFromArray, listToArray
} from "../lib/framework.js";

describe('Framework', () => {
  describe('list basics', () => {
    let xs;
    beforeEach(() => {
      // Create a new Rectangle object before every test.
      xs = list(1,2,3,4)
    });

    it('head', () => head(xs).should.equal(1) );
    it('tail', () => tail(tail(xs)).should.deep.equal(
        {head: 3, tail: {head: 4, tail: {}}})
    );
    it('cons', () => head(cons(5,xs)).should.equal(5))
    it('isEmpty', () => {
        let xs = list(1,2)
        isEmpty(list(1,2)).should.equal(false)
        isEmpty(list(2)).should.equal(false)
        isEmpty(list()).should.equal(true)
    })
  });

  describe('list utils', () => {
      it('listFromArray', () => {
        listFromArray([]).should.deep.equal(list())
        listFromArray([1,2]).should.deep.equal(list(1,2))
        listFromArray([list(2,3), 2]).should.deep.equal(
          list(list(2,3),2)
        )
      });
      it('listToArray', () => {
          listToArray(list(1,2)).should.deep.equal([1,2])
          listToArray(list()).should.deep.equal([])
          listToArray(list(1,list(2,list(3)))).should.deep.equal(
              [1,[2,[3]]]
          )
      });
  })
});
