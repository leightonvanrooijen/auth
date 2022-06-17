// Utils
import * as getPathsToFilesInModule from '../getPathsToFilesIn';
import { getPathsToFilesInEach } from '../getPathsToFilesInEach';

describe('getPathsToFilesInEach', () => {
  jest.spyOn(getPathsToFilesInModule, 'getPathsToFilesIn').mockImplementation((path: string) => [`${path}/file.ts`]);

  it('should get the paths to all files contained in the specified directories', () => {
    const files = getPathsToFilesInEach(['fileSystem/folder', 'fileSystem/folder']);

    expect(files).toEqual(['fileSystem/folder/file.ts', 'fileSystem/folder/file.ts']);
  });
});
