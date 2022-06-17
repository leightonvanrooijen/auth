// Utils
import { statSync } from 'fs';

/**
 * @description checks if the fileSystem provided leads to a file
 *
 * @param {string} filePath
 *
 * @return {boolean} - if the filePath leads to a file
 */
export const isFile = (filePath: string) => statSync(filePath).isFile();
