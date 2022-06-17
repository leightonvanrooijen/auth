// Utils
import * as loadFilesSyncModule from '@graphql-tools/load-files';
import { loadGraphTypeDefinitionsForModule } from '../loadGraphTypeDefinitionsForModule';

describe('loadGraphTypeDefinitionsForModule', () => {
  const loadFilesSyncSpy = jest.spyOn(loadFilesSyncModule, 'loadFilesSync');

  beforeEach(() => {
    loadFilesSyncSpy.mockClear();
  });

  it('should load in all files with the graphql extension in a given directory', () => {
    const mockReturn = ['mockTypes'];
    loadFilesSyncSpy.mockReturnValue(mockReturn);

    const typeDefinitions = loadGraphTypeDefinitionsForModule('mockDirectory');

    expect(loadFilesSyncSpy).toBeCalledWith('mockDirectory/*.graphql');
    expect(typeDefinitions).toEqual(mockReturn);
  });

  it('should throw an error if no graphql file can be found at the specified fileSystem', () => {
    loadFilesSyncSpy.mockReturnValue([]);

    const callback = () => loadGraphTypeDefinitionsForModule('invalid/fileSystem');

    expect(callback).toThrow(Error);
  });
});
