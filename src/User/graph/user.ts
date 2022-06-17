// Utils
import { createModule } from 'graphql-modules';
import { loadGraphTypeDefinitionsForModule } from '../../Helpers/graph/loadGraphTypeDefinitionsForModule';

// Testing
const users = [{ id: '1', name: 'Leighton', password: 'password' }];
export const getUser = (_: any, { id }: { id: string }) => users.find((user) => user.id == id);

export const UserModule = createModule({
  id: 'userModule',
  dirname: __dirname,
  typeDefs: loadGraphTypeDefinitionsForModule(__dirname),
  resolvers: {
    Query: {
      getUser: getUser,
    },
  },
});
