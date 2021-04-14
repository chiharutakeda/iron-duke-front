import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useSWR from 'swr';
import { gqlfetcher } from '@/fetch/fetcher';
// import { normalFetcher } from '@/fetch/fetcher';

type TodoListEntity = {
  getToDolist: {
    id: Number;
    firstName: String;
    lastName: String;
    todo: String;
    createdAt: String;
  };
};

//変数なしquery
const getToDolist_Q = `query{
  getToDolist{
    id
    firstName
    lastName
    todo
    createdAt
  }
}`;

//変数なしmutate
const registToDolist_M = `mutation{
  RegistToDo(todo:{firstName:"takeday",lastName:"chiharu",todo:"nextstage"}){
    id
    firstName
    lastName
    todo
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
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          gqlfetcher(registToDolist_M);
        }}
      >
        Primary
      </Button>
    </Container>
  );
}
