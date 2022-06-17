/**
 * @description removes the extension from a file returning the name
 *
 * @example exampleName.test.ts returns exampleName
 *
 * @param {string} file
 *
 * @return {string} file name
 */
export const getFileNameFrom = (file: string) => file.split('.')[0];
