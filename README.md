# immutablejs-eraser-codemod

A codemod to rescue you from a Immutable.js abuse.

## Why

[Immutable.js](https://facebook.github.io/immutable-js/) is a great library that helps you to remain your JavaScript objects immutable and provides you from a lot of data structures.

Probably, in a bunch scenarios Immutable.js **is your library**.

But sometimes you can get your code tightly coupled to this library, you are doing an abuse of it, or maybe your project needs may have changed, so you are no interested in use it anymore.

Is time to erase it :fire:

So this the main goal of this repository is provide you with a collection of codemod scripts for use with
[JSCodeshift](https://github.com/facebook/jscodeshift) and other utils that help you to achieve this.

## Setup & Run

1. `npm i -g jscodeshift` XOR `yarn global add jscodeshift`

## Included scripts

### getToStandardJSApi

Transform any Immutable.js getter `get` to the standard JavaScript way to access to object props.