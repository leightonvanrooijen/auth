// Utils
import { join } from 'path';
import { isFolder } from './isFolder';
import { readFolder } from './readFolder';

/**
 * @description returns all paths to folders contained in the specified folder
 *
 * @param {string} folderPath
 *
 * @return {string[]} - paths to all folders in folder
 */
export const getPathsToFoldersIn = (folderPath: string) => {
  return readFolder(folderPath)
    .filter((item) => isFolder(join(folderPath, item)))
    .map((item) => join(folderPath, item));
};
