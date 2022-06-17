// Uti;s
import { ApolloServer } from "apollo-server";

// Types
import { schema } from "./modules";

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
