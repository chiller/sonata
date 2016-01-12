import {list, cons, head, tail, isEmpty, show, foldl} from "./framework.js";
/* Exercise 5
 * Reverse a list
 * For example: reverse(list(1,2,3,4,5)) -> list(5,4,3,2,1)
 * Hint: you might want to create a helper function concat
 * to concatenate two lists
 */

export let concat = (xs, ys) => isEmpty(xs) ? ys : cons(head(xs), concat(tail(xs), ys))
export let reverse = xs => isEmpty(xs) ? xs : concat(reverse(tail(xs)), list(head(xs)))

// export let reverse = xs => foldl(cons,list(),xs)
