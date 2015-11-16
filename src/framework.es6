
"use strict";

export let isEmpty = (xs) => typeof(xs) == 'object' && ! xs.hasOwnProperty('head')
export let cons = (head, tail) => ({head, tail})
let listFromArray = (arr) =>
    (arr.length) ? cons(arr.shift(), listFromArray(arr)) : ({})
let listToArray = (xs) => {
    if(isEmpty(xs)) return [];
    else if(typeof(xs) == 'number') return xs;
    else return [listToArray(xs.head)].concat(listToArray(xs.tail));
}
export let list = (...args) => listFromArray(args)
let log = console.log
export let head = (xs) => xs.head
export let tail = (xs) => xs.tail
export let show = (xs) => console.log(listToArray(xs))
/*                       End of framework                                     */

/*                       Problem 1                                            */
let last = (xs) => isEmpty(tail(xs)) ? head(xs) : last(tail(xs))

