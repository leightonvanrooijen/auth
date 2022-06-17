// Utils
import { isObject } from '../isObject';
import { buildTestsFor } from '../../common/tests/utils/buildTestsFor';

// Types
import { primitiveTypes } from '../../primitive/tests/types/primitiveTypes';
import { objectTypes } from './types/objectTypes';
import { omit } from '../omit';
import { functionTypes } from '../../common/tests/types/functionTypes';
import { typesScraper } from '../../common/tests/utils/typesScraper';

describe('isObject', () => {
  describe('receives a value of an object type', () => {
    const objectTests = buildTestsFor({ object: {} }, true);

    it.concurrent.each(objectTests)('%s', (message: string, value: any) => {
      const actual = isObject(value);

      expect(actual).toBeTruthy();
    });
  });

  describe('receives a value of an non primitive type (excluding object)', () => {
    const nonPrimitiveTypesExcludingObject = omit(objectTypes, 'object');
    const nonPrimitiveTests = buildTestsFor(nonPrimitiveTypesExcludingObject, false);

    it.concurrent.each(nonPrimitiveTests)('%s', (message: string, value: any) => {
      const actual = isObject(value);

      expect(actual).toBeFalsy();
    });
  });

  describe('receives a value of an non-object type', () => {
    // @todo automate the gathering of type - perhaps through fileSystem + naming pattern?
    const nonObjectTypes = { ...primitiveTypes, ...functionTypes };
    const nonObjectTests = buildTestsFor(nonObjectTypes, false);

    it.concurrent.each(nonObjectTests)('%s', (message: string, value: any) => {
      const actual = isObject(value);

      expect(actual).toBeFalsy();
    });
  });
});
