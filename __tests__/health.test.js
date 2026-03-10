import getHealthStatus from '../src/health';

test('returns healthy if health > 50', () => {
  const result = getHealthStatus({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('returns wounded if health between 15 and 50', () => {
  const result = getHealthStatus({ name: 'Воин', health: 40 });
  expect(result).toBe('wounded');
});

test('returns wounded if health exactly 15', () => {
  const result = getHealthStatus({ name: 'Лучник', health: 15 });
  expect(result).toBe('wounded');
});

test('returns critical if health < 15', () => {
  const result = getHealthStatus({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});