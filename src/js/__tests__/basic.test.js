import character from '../app';

test.each([
  ['Маг', 90, 'healthy'],
  ['Варвар', 50, 'wounded'],
  ['Вор', 12, 'critical'],
  ['no', 130, 0],
])(
  ('should return correct health level for %s with %i health'),
  (a, b, expected) => {
    const result = character({ name: a, health: b });
    expect(result).toBe(expected);
  },
);
