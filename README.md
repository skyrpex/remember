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

remember(object, 'a', () => 'default A'); // 'value A'
remember(object, 'b', () => 'default B'); // 'default B'
object.b; // 'default B'
```
