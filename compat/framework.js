
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
var isEmpty = function isEmpty(xs) {
    return typeof xs == 'object' && !xs.hasOwnProperty('head');
};
exports.isEmpty = isEmpty;
var cons = function cons(head, tail) {
    return { head: head, tail: tail };
};
exports.cons = cons;
var listFromArray = function listFromArray(arr) {
    return arr.length ? cons(arr.shift(), listFromArray(arr)) : {};
};
var listToArray = function listToArray(xs) {
    if (isEmpty(xs)) return [];else if (typeof xs == 'number') return xs;else return [listToArray(xs.head)].concat(listToArray(xs.tail));
};
var list = function list() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return listFromArray(args);
};
exports.list = list;
var log = console.log;
var head = function head(xs) {
    return xs.head;
};
exports.head = head;
var tail = function tail(xs) {
    return xs.tail;
};
exports.tail = tail;
var show = function show(xs) {
    return console.log(listToArray(xs));
};
exports.show = show;
/*                       End of framework                                     */

/*                       Problem 1                                            */
var last = function last(_x) {
    var _again = true;

    _function: while (_again) {
        var xs = _x;
        _again = false;
        if (isEmpty(tail(xs))) {
            return head(xs);
        } else {
            _x = tail(xs);
            _again = true;
            continue _function;
        }
    }
};