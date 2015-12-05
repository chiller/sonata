
let chai = require('chai'),
  path = require('path');

chai.should();

import {
    list, cons, head, tail, isEmpty, show,
    listFromArray, listToArray,
    filter, map, foldl
} from "../lib/framework.js";

describe('Framework', () => {
  describe('list basics', () => {
    let xs = list(1,2,3,4)

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

  describe('higher order functions', () => {
    let xs = list(1,2,3,4);

    it('map', () => {
        let plus1 = x => x + 1;
        let double = x => x * 2;
        let wrap = x => list(x);
        map(plus1, xs).should.deep.equal(list(2,3,4,5))
        map(double, xs).should.deep.equal(list(2,4,6,8))
        listToArray(map(wrap, xs)).should.deep.equal(
            [[1],[2],[3],[4]])
    })
    it('filter', () => {
        let id = x => x
        let gt3 = x => x > 3
        filter(id, xs).should.deep.equal(xs)
        filter(gt3, xs).should.deep.equal(list(4))
    })

    it('fold', () => {
        foldl(cons,list(),list(3,2,1)
        ).should.deep.equal(list(1,2,3))
        let plus = (x,y) => x + y
        foldl(plus,0,list(1,2,3)).should.equal(6)
    })
  })
});
