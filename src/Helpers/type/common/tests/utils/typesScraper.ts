// Utils
import { join } from 'path';
import { getPathsToFoldersIn } from '../../../../fileSystem/getPathsToFoldersIn';
import { getPathsToFilesInEach } from '../../../../fileSystem/getPathsToFilesInEach';
import { getFileFrom } from '../../../../fileSystem/getFileFrom';
import { getFileNameFrom } from '../../../../fileSystem/getFileNameFrom';
import { pipe } from '../../../../foundation/pipe';

export const appendToPath = (pathToAppend: string) => (path: string) => join(path, pathToAppend);

export const appendToPaths = (pathToAppend: string) => (paths: string[]) =>
  paths.map((path) => join(path, pathToAppend));

const getValidPathsToTypeFiles = (): string[] => {
  const pathToTypesRoot = join(__dirname, '..', '..', '..');
  const nestedPath = join('tests', `types`);
  return pipe(pathToTypesRoot)(getPathsToFoldersIn, appendToPaths(nestedPath), getPathsToFilesInEach);
};

export const getTypeFile = (): Record<string, string> => {
  const typeFilePaths = getValidPathsToTypeFiles();

  return typeFilePaths.reduce((result, path) => {
    const typeName = pipe(path)(getFileFrom, getFileNameFrom);
    return { ...result, [typeName]: path };
  }, {});
};

export const typesScraper = () => {
  const typeFiles = getTypeFile();
  return Object.entries(typeFiles).reduce((result, [typeName, path]) => {
    const typeObject = require(path)[typeName];
    return { ...result, [typeName]: typeObject };
  }, {});
};
