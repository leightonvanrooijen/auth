import { omit } from '../omit';

describe('omit', () => {
  it('should omit the entry matching the passed in key from an object', () => {
    const expected = { a: 1, c: 103 };
    const object = { a: 1, b: 'string', c: 103 };

    const objectWithOmittedValue = omit(object, 'b');

    expect(objectWithOmittedValue).toEqual(expected);
  });
});
