import test from 'ava';
import remember from './dist/remember.cjs';

test('gets the value when path exist', (t) => {
  const object = {
    a: 'value',
  };

  t.true(remember(object, 'a') === 'value');
});

test('sets the value of the callback when path does not exist', (t) => {
  const object = {};

  t.true(remember(object, 'a', () => 'value') === 'value');
  t.true(object.a === 'value');
});
