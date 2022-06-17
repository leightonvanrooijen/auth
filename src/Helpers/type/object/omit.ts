/**
 * @description omits an entry from an object based on the keyToOmit passed in. The function will only omit entries in
 * the first depth of an object
 *
 * @todo support nested omitting
 *
 * @param {Record<string, any>} object
 * @param {string} keyToOmit
 *
 * @return {Record<string, any>} - copy of object with entry omitted
 */
export const omit = (object: Record<string, any>, keyToOmit: string) => {
  const objectCopy = { ...object };
  Object.keys(objectCopy).forEach((key) => {
    if (key === keyToOmit) {
      delete objectCopy[keyToOmit];
    }
  });

  return objectCopy;
};
