import { get, has, set } from 'lodash';

var index = (function (object, path, defaultValue) {
  if (has(object, path)) {
    return get(object, path);
  }

  var value = defaultValue();
  set(object, path, value);
  return value;
});

export default index;
