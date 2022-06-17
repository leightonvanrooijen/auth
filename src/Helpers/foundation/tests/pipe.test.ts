import { pipe } from '../pipe';

describe('pipe', () => {
  const mockFn = jest.fn(() => 5);
  const mockFn2 = jest.fn((number) => number + 1);

  it('should pass the given value to the first function', () => {
    pipe(3)(mockFn);

    expect(mockFn).toBeCalledWith(3);
  });

  it('should pass the result of each function the the next', () => {
    pipe(0)(mockFn, mockFn2);

    expect(mockFn2).toBeCalledWith(5);
  });

  it('should return the result of the last function', () => {
    const result = pipe(0)(mockFn, mockFn, mockFn2);

    expect(result).toEqual(6);
  });
});
