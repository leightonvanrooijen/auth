/**
 * @description passes the result of each function the next in the order the functions are passed in
 *
 * @todo would there be benefit in allowing multiple args as the input or changing functions to accepts arrays/objects?
 *
 * @example
 *  pipe('index.ts')(getFileName, uppercase) is the same as uppercase(getFileName('index.ts'))
 *  returns INDEX
 *
 * @param {any} value
 *
 * @return {any} - return of the final function passed in
 */
export const pipe =
  <T>(value: T) =>
  (...functions: ((arg: any) => any)[]) =>
    functions.reduce((currentValue, currentFunction) => {
      return currentFunction(currentValue);
    }, value);
