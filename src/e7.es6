import {list, cons, head, tail, isEmpty, show, equals, reverse} from "./framework.js";
import {concat} from "./e5.js";
/* Exercise 7
 * Transform a list, possibly holding lists as elements into a `flat'
 * list by replacing each list with its elements (recursively).
 * Example:
 * flatten(list(a, list(b, list(c, d), e))) ->  list(a b c d e)
 */


let isNumber = x => typeof(x) === 'number'
export let flatten = (xs) => isEmpty(xs) ? xs :
    isNumber(head(xs)) ? cons(head(xs), flatten(tail(xs))) : concat(flatten(head(xs)), flatten(tail(xs)))
