// Utils
import { buildTestsFor } from '../../common/tests/utils/buildTestsFor';
import { isPrimitive } from '../isPrimitive';

// Types
import { primitiveTypes } from './types/primitiveTypes';
import { objectTypes } from '../../object/tests/types/objectTypes';
import { functionTypes } from '../../common/tests/types/functionTypes';

describe('isPrimitive', () => {
  describe('receives a value of an primitive type', () => {
    const primitiveTests = buildTestsFor(primitiveTypes, true);

    it.concurrent.each(primitiveTests)('%s', (message: string, value: any) => {
      const actual = isPrimitive(value);

      expect(actual).toBeTruthy();
    });
  });

  describe('receives a value of an non-primitive type', () => {
    const nonPrimitiveTypes = { ...objectTypes, ...functionTypes };
    const nonPrimitiveTests = buildTestsFor(nonPrimitiveTypes, false);

    it.concurrent.each(nonPrimitiveTests)('%s', (message: string, value: any) => {
      const actual = isPrimitive(value);

      expect(actual).toBeFalsy();
    });
  });
});
