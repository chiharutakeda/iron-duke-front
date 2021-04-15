import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useSWR from 'swr';
import { gqlfetcher } from '@/fetch/fetcher';
// import { normalFetcher } from '@/fetch/fetcher';

type TypeTodoList = {
  getAllToDolist: [
    {
      id: number;
      firstName: String;
      lastName: String;
      todo: String;
      createdAt: String;
    }
  ];
};

//変数なしquery
const getAllToDolist_Q = `query{
  getAllToDolist{
    id
    firstName
    lastName
    todo
    createdAt
  }
}`;

export default function AllToDoList() {
  // const { data, error } = useSWR<TodoListEntity>(getToDolist_Q, normalFetcher); //普通のfetcherバージョン
  const { data, error } = useSWR<TypeTodoList>(getAllToDolist_Q, gqlfetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          To Do List
        </Typography>
        {data.getAllToDolist &&
          data.getAllToDolist.map((todo) => {
            return (
              <React.Fragment key={todo.id}>
                <div>{todo.id}</div>
                <div>{todo.firstName}</div>
                <div>{todo.lastName}</div>
                <div>{todo.todo}</div>
              </React.Fragment>
            );
          })}
      </Box>
    </>
  );
}
