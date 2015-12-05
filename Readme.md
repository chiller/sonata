## Function collection for a functional programming dojo

### Introduction

Recursion has great emphasis in functional programming, and for our exercises we will be using a data structure that is recursive itself: the linked list.

Summary of a linked list(we will call it list for short)

`{head: 1, tail: {head: 2, tail: {head: 3, ... }}}`
- it has a _head_ which is the first element
- it has a _tail_ which is the remainder of the list(is also a linked list)
- it can be Empty
- it can contain anything, even other lists
- instead of appending to a list we are prepending, known as _cons_

### Goal of the dojo

We will be going through the 99 haskell problems https://wiki.haskell.org/H-99:_Ninety-Nine_Haskell_Problems

We will see that using a handful of functions we will be able to solve many exercises and define higher order functions like concat, map, reduce, filter, compose.

The naming convention taken from haskell will be x, y, z.. for simple types(like numbers) and xs, ys, zs.. for lists xss... for nested lists.

### The framework

The framework exists as a boundary, inside which live the functions that have javascript specific functionality, these are only a few. They aim to be an *abstraction*, we don't need to worry about how they are implemented, but it can be helpful to take a look at the implementation. Even the linked list implementation is hidden, there is no need to worry about the head attribute or the internals of the linked list.

- `cons(x, xs)` prepends of _cons_es x to the beginning of list xs
- `head(xs)` returns the head or first element of a list
- `tail(xs)` returns the remainder or tail of a list
- `isEmpty(xs)` returns true if xs is an empty list, `{}` is an empty list
- `isNumber(x)` returns true if x is a number

Convenience functions

- `list(x, y, z, ...)` is an easy way to create a list
- `show(xs)` logs a list to the console in a prettier way
- `equals(xs, ys)` true if the flat list xs has the same content as flat list ys
- `reverse(xs)` returns a reversed copy of list xs

###Higher Order Functions

- `map(fn, xs)` returns a new list with function fn applied to every element of xs
- `filter(fn, xs)` returns a new list with the elements of xs for which fn applied was truthy
- `foldl(fn, acc, xs)` folds over list xs from the left using function fn and the initial value acc. fn takes the list element first and then the accumulator


## Recommended Javascript syntax to use

tertiary conditional expression `cond ? expr1 : expr2`

simple javascript operators `== > < >= && ||`

shorthand function definition `var a = (xs) => x * 2`


##Setting Up

###For Es6
`git clone git@github.com:chiller/sonata.git`

`cd sonata`

`npm install`

To build and run manually

`gulp es6`

`node lib/e0.js`

To run tests once built

`gulp test`

To build and run test with watching on change

`gulp watch`

###If you only want to use javascript

`cd sonata/compat`

`node e0.js`





