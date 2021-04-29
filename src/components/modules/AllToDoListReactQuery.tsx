import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DeleteButtonReactQuery from '@/components/atoms/DeleteButtonReactQuery';
import { gql } from 'graphql-request';
import { getAllToDolist } from '@/generated/getAllToDolist';
import { useQuery } from 'react-query';
import { gqlfetcher } from '@/fetch/fetcher';

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

export default function AllToDoListReactQuery() {
  const { data, error } = useQuery<getAllToDolist>(['getAllToDolist'], () => gqlfetcher(getAllToDolist_Q),{refetchInterval:3000});

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          To Do List with react-query
        </Typography>
        {data.getAllToDolist &&
          data.getAllToDolist.map((todo) => {
            return (
              <Box margin={'5px 0px 5px 0px'} padding={'0px 5px 0px 5px'} border={'1px dashed grey'} key={todo.id}>
                <div>{'ID ' + todo.id + '   FIRSTNAME ' + todo.firstName + '   LASTNAME ' + todo.lastName}</div>
                <div>{'TODO  ' + todo.todo}</div>
                <DeleteButtonReactQuery ID={Number(todo.id)}></DeleteButtonReactQuery>
              </Box>
            );
          })}
      </Box>
    </>
  );
}
