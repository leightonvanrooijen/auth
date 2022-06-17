/**
 * @description checks that the passed in value is an object. This should be used over typeof 'object' as
 * typescripts object type is any non-primitive type
 *
 *
 * @param {object} value
 *
 * @return {boolean} - if the passed in value is an object
 */
import { isPrimitive } from '../primitive/isPrimitive';

export const isObject = (value: any) =>
  !(value instanceof Map) && !Array.isArray(value) && !isPrimitive(value) && !(value instanceof Function);
