const { ApolloServer, gql } = require('apollo-server-micro');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, GraphQL!',
  },
};

(async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  module.exports = apolloServer.createHandler({ path: '/api/graphql' });
})();
