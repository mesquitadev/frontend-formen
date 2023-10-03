import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://formenilha-4a17f7fac5f7.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});
