# immutablejs-eraser-codemod

A codemod to rescue you from a Immutable.js abuse.

## Why

[Immutable.js](https://facebook.github.io/immutable-js/) is a great library that helps you to remain your JavaScript objects immutable and provides you from a lot of data structures.

Probably, in a bunch scenarios Immutable.js **is your library**.

But sometimes you can get your code tightly coupled to this library, you are doing an abuse of it, or maybe your project needs may have changed, so you are no interested in use it anymore.

Is time to erase it :fire:

So this the main goal of this repository is provide you with a collection of codemod scripts for use with
[JSCodeshift](https://github.com/facebook/jscodeshift) and other utils that help you to achieve this.

We recommend that before use this tool ensure that you have a backup (for example, if you don't have the source code versioned with tools like **git** :D)

## Setup

- `npm install`

if you are working with **yarn**, use `yarn` instead of `npm` and `npx`

## Run

- `npx jscodeshift path_to_the_code_you_want_to_transform -t jscodeshift_transformer_file`

## Running example:

 In order to ensure that you are executing correctly the code of the example be sure that you are in the **root directory** of immutablejs-eraser-codemod package :)

- `npm install --prefix examples/get-to-js-bracket-notation`
- `npx jscodeshift examples/get-to-js-bracket-notation/**.js -t transforms/getToStandardJSApi.js`

## Included scripts

### getToStandardJSApi

Transform any Immutable.js getter `get` to the standard JavaScript way to access to object props.