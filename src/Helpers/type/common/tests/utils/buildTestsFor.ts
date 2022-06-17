/**
 * @description generates type check tests to be used in jests each test function. This is designed to have specific
 * groups of passed in such as objects or primitives. The format of the type object should be
 * { nameOfType: instance of type }
 *
 * @example
 *  typesObject = { string: 'string', integer: 1 }
 *  expectedResult = true
 *  will return:
 *    [
 *      [`should return true if the passed in value is a string`, 'string'],
 *      [`should return true if the passed in value is an integer`, 1]
 *    ]
 *
 * @param {object} typeObject
 * @param {boolean} expectedResult - expected result for all tests
 *
 * @return {[string, any]} - array of tests
 */
export const buildTestsFor = (typeObject: object, expectedResult: boolean) =>
  Object.entries(typeObject).map(([key, value]) => {
    return [`should return ${expectedResult} if the passed in value is an ${key}`, value];
  });
