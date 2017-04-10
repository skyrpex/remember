'use strict';

var lodash = require('lodash');

var index = (function (object, path, defaultValue) {
  if (lodash.has(object, path)) {
    return lodash.get(object, path);
  }

  var value = defaultValue();
  lodash.set(object, path, value);
  return value;
});

module.exports = index;
