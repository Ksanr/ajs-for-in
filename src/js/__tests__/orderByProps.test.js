import orderByProps from '../orderByProps';

describe('orderByProps', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

  test('should sort by given order and then alphabetically', () => {
    const result = orderByProps(obj, ['name', 'level']);
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  test('should handle empty sortOrder', () => {
    const result = orderByProps(obj, []);
    expect(result).toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ]);
  });

  test('should ignore keys in sortOrder that do not exist in object', () => {
    const result = orderByProps(obj, ['nonexistent', 'name']);
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
    ]);
  });

  test('should work with object having different keys', () => {
    const obj2 = { a: 1, c: 3, b: 2 };
    const result = orderByProps(obj2, ['b', 'a']);
    expect(result).toEqual([
      { key: 'b', value: 2 },
      { key: 'a', value: 1 },
      { key: 'c', value: 3 },
    ]);
  });
});