// Mocks
import * as isFileModule from '../isFile';
import * as readFolderModule from '../readFolder';

// Utils
import { getPathsToFilesIn } from '../getPathsToFilesIn';

describe('getPathsToFilesIn', () => {
  const isFileSpy = jest.spyOn(isFileModule, 'isFile');
  jest.spyOn(readFolderModule, 'readFolder').mockReturnValue(['dir', 'file.ts', 'dir3']);

  it('should return all valid files in the specified fileSystem', () => {
    isFileSpy.mockReturnValueOnce(false).mockReturnValueOnce(true).mockReturnValue(false);
    const expected = ['fileSystem/file.ts'];

    const folders = getPathsToFilesIn('./fileSystem/');

    expect(folders).toEqual(expected);
  });
});
