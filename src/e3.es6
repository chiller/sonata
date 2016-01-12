import {list, cons, head, tail, isEmpty, show} from "./framework.js";
/* Exercise 3
 * Find the K'th element of a list
 * For example: elementAt(2, list(1,2,3,4,5)) -> 3
 */

export let elementAt = (k, xs) => k==0 ? head(xs) : elementAt(k - 1, tail(xs))





