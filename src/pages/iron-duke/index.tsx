import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useSWR from 'swr';
import { gqlfetcher } from '../../graphql/fetcher';
// import { normalFetcher } from '../../graphql/fetcher';

type TodoListEntity = {
  getToDolist: {
    id: Number;
    firstName: String;
    lastName: String;
    todo: String;
    createdAt: String;
  };
};

const getToDolist_Q = `query{
  getToDolist{
    id
    firstName
    lastName
    todo
    createdAt
  }
}`;

export default function Index() {
  // const { data, error } = useSWR<TodoListEntity>(getToDolist_Q, normalFetcher); //普通のfetcherバージョン
  const { data, error } = useSWR<TodoListEntity>(getToDolist_Q, gqlfetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          To Do Listd
        </Typography>
        <div>{data.getToDolist.id}</div>
        <div>{data.getToDolist.firstName}</div>
        <div>{data.getToDolist.lastName}</div>
        <div>{data.getToDolist.todo}</div>
        <div>{data.getToDolist.createdAt}</div>
      </Box>
    </Container>
  );
}
