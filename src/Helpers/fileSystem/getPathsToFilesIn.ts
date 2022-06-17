// Utils
import { join } from 'path';
import { readFolder } from './readFolder';
import { isFile } from './isFile';

/**
 * @description returns all paths to files contained in the specified folder
 *
 * @param {string} folderPath
 *
 * @return {string[]} - paths to all folders in folder
 */
export const getPathsToFilesIn = (folderPath: string) => {
  return readFolder(folderPath)
    .filter((item) => isFile(join(folderPath, item)))
    .map((item) => join(folderPath, item));
};
