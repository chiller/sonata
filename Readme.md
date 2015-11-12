## Function collection for a functional programming dojo

### Introduction

Recursion has great emphasis in functional programming, and for our exercises we will be using a data structure that is recursive itself: the linked list.

Summary of a linked list(we will call it list for short)

`{head: 1, tail: {head: 2, tail: {head: 3, ... }}}`
- it has a _head_ which is the first element
- it has a _tail_ which is the remainder of the list(is also a linked list)
- it can be Empty
- it can contain anything, even other lists
- instead of appending do a list we are prepending, known as _cons_

### Goal of the dojo

We will be going through the 99 haskell problems https://wiki.haskell.org/H-99:_Ninety-Nine_Haskell_Problems

We will see that using a handful of functions we will be able to solve many exercises and define higher order functions like concat, map, reduce, filter, compose.

The naming convention taken from haskell will be x, y, z.. for simple types and xs, ys, zs.. for lists xss... for nested lists.

### The framework

The framework exists as a boundary, inside which live the functions that have javascript specific functionality, these are very little in number. They aim to be an *abstraction*, we don't need to worry about how they are implemented, but it can be helpful to take a look at the implementation.

- `cons(x, xs)` prepends of _cons_es x to the beginning of list xs
- `head(xs)` returns the head or first element of a list
- `tail(xs)` returns the remainder or tail of a list
- `isEmpty(xs)` returns true if xs is an empty list, `{}` is an empty list
- `isNumber(x)` returns true if x is a number

Convenience functions

- `list(x, y, z, ...)` is an easy way to create a list
- `show(xs)` logs a list to the console in a prettier way

### Setting up

TBC
