import * as React from 'react';
import Container from '@material-ui/core/Container';
import AllToDoList from '@/components/modules/AllToDoList';
import ToDoRegister from '@/components/modules/ToDoRegister';
import AllToDoListApollo from '@/components/modules/AllToDoListApollo';
import ToDoRegisterApollo from '@/components/modules/ToDoRegisterApollo';
import Box from '@material-ui/core/Box';

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import AllToDoListReactQuery from '@/components/modules/AllToDoListReactQuery';
import ToDoRegisterReactQuery from '@/components/modules/ToDoRegisterReactQuery';
const queryClient = new QueryClient();

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box>
        <ToDoRegister />
        <AllToDoList />

        <ApolloProvider client={client}>
          <ToDoRegisterApollo />
          <AllToDoListApollo />
        </ApolloProvider>

        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ToDoRegisterReactQuery />
          <AllToDoListReactQuery />
        </QueryClientProvider>
      </Box>
    </Container>
  );
}
