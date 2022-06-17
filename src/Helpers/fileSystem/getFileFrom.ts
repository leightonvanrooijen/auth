/**
 * @description gets the file name and extension from the specified path
 *
 * @param {string} path
 *
 * @return {string} file
 */
export const getFileFrom = (path: string) => path.split('/').slice(-1)[0];
