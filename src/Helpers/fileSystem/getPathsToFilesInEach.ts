// Utils
import { getPathsToFilesIn } from './getPathsToFilesIn';

/**
 * @description returns all paths to files contained in the specified folders
 *
 * @param {string[]} pathsToFolders
 *
 * @return {string[]} - paths to all files in folders
 */
export const getPathsToFilesInEach = (pathsToFolders: string[]) => pathsToFolders.flatMap(getPathsToFilesIn);
