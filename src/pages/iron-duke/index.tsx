import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import AllToDoList from '@/components/modules/AllToDoList';
import ToDoRegister from '@/components/modules/ToDoRegister';
import AllToDoListApollo from '@/components/modules/AllToDoListApollo';
import ToDoRegisterApollo from '@/components/modules/ToDoRegisterApollo';
import fetch from 'cross-fetch';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'http://localhost:4000/graphql', fetch }),
});

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import AllToDoListReactQuery from '@/components/modules/AllToDoListReactQuery';
import ToDoRegisterReactQuery from '@/components/modules/ToDoRegisterReactQuery';
const queryClient = new QueryClient();

export default function Index() {
  return (
    <Grid container justifyContent="space-around">
      <Grid item xs={3}>
        <ToDoRegister />
        <AllToDoList />
      </Grid>

      <Grid item xs={3}>
        <ApolloProvider client={client}>
          <ToDoRegisterApollo />
          <AllToDoListApollo />
        </ApolloProvider>
      </Grid>

      <Grid item xs={3}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ToDoRegisterReactQuery />
          <AllToDoListReactQuery />
        </QueryClientProvider>
      </Grid>
    </Grid>
  );
}
