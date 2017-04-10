# Remember

[![TravisCI Build status](https://travis-ci.org/skyrpex/remember.svg?branch=master)](https://travis-ci.org/skyrpex/remember)

Method that retrieves a value from an object given a path. If the path doesn't exist in the object, it assigns the default value from the given callback.

## Installation

`npm install @skyrpex/remember`

## Usage

```js
import remember from '@skyrpex/remember';

const object = {
  a: 'value A',
};

console.log(remember(object, 'a', () => 'default A')); // logs 'value A'
console.log(remember(object, 'b', () => 'default B'); // logs 'default B'
console.log(object.b); // logs 'default B'
```
