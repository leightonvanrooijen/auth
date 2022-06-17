// Utils
import { statSync } from 'fs';

/**
 * @description checks if the fileSystem provided leads to a folder
 *
 * @param {string} folderPath
 *
 * @return {boolean} - if the folderPath leads to a folder
 */
export const isFolder = (folderPath: string) => statSync(folderPath).isDirectory();
