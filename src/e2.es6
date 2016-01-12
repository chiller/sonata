import {list, cons, head, tail, isEmpty, show} from "./framework.js";

/* Exercise 2
 * Write a function myButLast that finds the last but one
 * element of a list
 * For example: butLast(list(1,2,3,4,5)) -> 4
 */

export let lastButOne = xs => isEmpty(tail(tail(xs))) ? head(xs) : lastButOne(tail(xs))
