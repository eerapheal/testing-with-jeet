const stringLength = require('./texting1');

test('length for words should be 7', () => {
  expect(stringLength('bottle')).toBe(6);
})

test('throw Error', () => {
  expect(() => {stringLength('come and code with me at microverse')}).toThrow();
})

test('throw Error', () => {
  expect(() => {stringLength('apocalipto')}).toThrow();
})