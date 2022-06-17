// Utils
import { loadFilesSync } from '@graphql-tools/load-files';
import { join } from 'path';
import { isNotEmpty } from '../type/common/isNotEmpty';

export const loadGraphTypeDefinitionsForModule = (pathToGraphFolder: string) => {
  // @todo replace loadFilesSync with my own helper
  const typeDefinitions = loadFilesSync(join(pathToGraphFolder, './*.graphql'));

  if (isNotEmpty(typeDefinitions)) {
    return typeDefinitions;
  }

  throw new Error('The specified fileSystem contains no graphql type definitions');
};
