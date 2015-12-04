
"use strict";

export let isEmpty = (xs) => typeof(xs) == 'object' && ! xs.hasOwnProperty('head')
export let cons = (head, tail) => ({head, tail})
export let listFromArray = (arr) =>
    (arr.length) ? cons(arr.shift(), listFromArray(arr)) : ({})
export let listToArray = (xs) => {
    if(isEmpty(xs)) return [];
    else if(typeof(xs) == 'number') return xs;
    else return [listToArray(xs.head)].concat(listToArray(xs.tail));
}
export let list = (...args) => listFromArray(args)
let log = console.log
export let head = (xs) => xs.head
export let tail = (xs) => xs.tail
export let show = (xs) => console.log(listToArray(xs))

export let equals = (xs, ys) => isEmpty(xs) ? isEmpty(ys) :
    head(xs) == head(ys) && equals(tail(xs), tail(ys))

/*                       Higher Order Functions                               */

export let fold = (fn, acc, xs) => isEmpty(xs) ?
    acc :
    fold(fn, fn(head(xs), acc), tail(xs))


export let map = (fn, xs) => isEmpty(xs) ? xs : cons(
    fn(head(xs)),
    map(fn, tail(xs))
)

export let filter = (fn, xs) => isEmpty(xs) ? xs :
    fn(head(xs)) ?
    cons(head(xs), filter(fn, tail(xs))) :
    filter(fn, tail(xs))

export let reverse = xs => fold(cons, list(), xs)
