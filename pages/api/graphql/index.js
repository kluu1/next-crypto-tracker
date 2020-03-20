import { ApolloServer } from 'apollo-server-micro';
import connectDb from '../../../utils/connectDb';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const server = apolloServer.createHandler({ path: '/api/graphql' });
 
export const config = {
  api: {
    bodyParser: false
  }
};

export default connectDb(server);
