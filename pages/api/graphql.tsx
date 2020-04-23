import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello: () => {
      return "Hellooooo meg";
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });

// export default (req, res) => {
//     res.status(200).json({test: 'hello'})
// }
// export default (req, res) => {
//     res.setHeader('Content-type', 'application/json')
//     res.statusCode = 200;
//     res.end(JSON.stringify({test: 'hello'}))
// }
