import fetchData from '../http';

test('function should throw Error, if the url is passed without an id', () => {
  expect(() => fetchData('https://server/user')).toThrow(new Error('id не был передан'));
});

test('function should return object, if the url is passed with id', () => {
  const received = fetchData('https://server/user/326');
  expect(received).toEqual({});
});
