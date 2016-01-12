import {list, cons, head, tail, isEmpty, show} from "./framework.js";
/* Exercise 4
 * Count the number of elements in a list
 * For example: count(list(1,2,3,4,5)) -> 5
 */


export let count = xs => isEmpty(xs) ? 0 : 1 + count(tail(xs))



