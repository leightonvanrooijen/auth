import { isObject } from '../object/isObject';

/**
 * @description checks if the passed in value is value is empty
 *
 * @todo the functionality needs to be expanded as the need arises
 *
 * @param {any[] | string} value
 *
 * @return {boolean} - if the value is empty
 */
export const isEmpty = (value: any) => {
  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0;
  }

  if (isObject(value)) {
    return Object.keys(value).length === 0 && Object.getPrototypeOf(value) === Object.prototype;
  }

  // @todo add map support

  return undefined;
};
