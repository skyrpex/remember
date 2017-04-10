import {
  get,
  set,
  has,
} from 'lodash';

export default (object, path, defaultValue) => {
  if (has(object, path)) {
    return get(object, path);
  }

  const value = defaultValue();
  set(object, path, value);
  return value;
};
