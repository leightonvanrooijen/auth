// Utils
import { createApplication } from 'graphql-modules';

// Modules
import { UserModule } from './User/graph/user';

const application = createApplication({
  modules: [UserModule],
});

export const schema = application.createSchemaForApollo();
