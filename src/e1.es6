import {list, cons, head, tail, isEmpty, show} from "./framework.js";

/* Exercise 1
 * Write a function myLast that finds the last element of a list
 * For example: last(list(1,2,3,4)) -> 4
 */

export let last = xs => isEmpty(tail(xs)) ? head(xs) : last(tail(xs))



