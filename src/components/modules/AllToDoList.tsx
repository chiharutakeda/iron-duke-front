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
  const { data, error } = useSWR<TypeTodoList>(getAllToDolist_Q, gqlfetcher, { refreshInterval: 3000 });

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
              <Box margin={'5px 0px 5px 0px'} padding={'0px 5px 0px 5px'} border={'1px dashed grey'} key={todo.id}>
                <div>{'ID ' + todo.id + '   FIRSTNAME ' + todo.firstName + '   LASTNAME ' + todo.lastName}</div>
                <div>{'TODO  ' + todo.todo}</div>
              </Box>
            );
          })}
      </Box>
    </>
  );
}
