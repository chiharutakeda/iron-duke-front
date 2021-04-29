import * as React from 'react';
import Box from '@material-ui/core/Box';
import DeleteButton from '@/components/atoms/DeleteButton';
import useSWR from 'swr';
import { gqlfetcher } from '@/fetch/fetcher';
import { gql } from 'graphql-request';
import {getAllToDolist} from '@/generated/getAllToDolist'
// import { normalFetcher } from '@/fetch/fetcher';

//変数なしquery
const getAllToDolist_Q = gql`
  query getAllToDolist {
    getAllToDolist {
      id
      firstName
      lastName
      todo
      createdAt
    }
  }
`;

export default function AllToDoList() {
  // const { data, error } = useSWR<TodoListEntity>(getToDolist_Q, normalFetcher); //普通のfetcherバージョン
  const { data, error } = useSWR<getAllToDolist>(getAllToDolist_Q, gqlfetcher, { refreshInterval: 3000 });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <Box sx={{ my: 4 }}>
        {data.getAllToDolist &&
          data.getAllToDolist.map((todo) => {
            return (
              <Box margin={'5px 0px 5px 0px'} padding={'0px 5px 0px 5px'} border={'1px dashed grey'} key={todo.id}>
                <div>{'ID ' + todo.id + '   FIRSTNAME ' + todo.firstName + '   LASTNAME ' + todo.lastName}</div>
                <div>{'TODO  ' + todo.todo}</div>
                <DeleteButton ID={Number(todo.id)}></DeleteButton>
              </Box>
            );
          })}
      </Box>
    </>
  );
}
