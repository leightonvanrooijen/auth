import { isEmpty } from '../isEmpty';

describe('isEmpty', () => {
  describe('when an array is passed', () => {
    it.concurrent.each([
      ['should return true if the array is empty', [], true],
      ['should return false if the array is not empty', [1, 'string'], false],
    ])('%s', (message: string, array: any[], expected: boolean) => {
      expect(isEmpty(array)).toEqual(expected);
    });
  });
});
