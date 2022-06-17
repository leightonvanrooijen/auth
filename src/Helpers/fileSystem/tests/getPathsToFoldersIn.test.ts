// Mocks
import * as isFolderModule from '../isFolder';
import * as readFolderModule from '../readFolder';

// Utils
import { getPathsToFoldersIn } from '../getPathsToFoldersIn';

describe('getPathsToFoldersIn', () => {
  const isDirectorySpy = jest.spyOn(isFolderModule, 'isFolder');
  jest.spyOn(readFolderModule, 'readFolder').mockReturnValue(['dir', 'index.ts', 'dir3']);

  it('should return all valid folders at a specified fileSystem', () => {
    // @todo is there a better way to mock a folder structure
    isDirectorySpy.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValue(true);
    const expected = ['fileSystem/dir', 'fileSystem/dir3'];

    const folders = getPathsToFoldersIn('./fileSystem/');

    expect(folders).toEqual(expected);
  });
});
