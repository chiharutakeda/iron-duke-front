import * as React from 'react';
import Box from '@material-ui/core/Box';
import DeleteButtonReactQuery from '@/components/atoms/DeleteButtonReactQuery';
import useAllToDoListReactQuery from '@/hooks/useAllToDoListReactQuery';

export default function AllToDoListReactQuery() {
  const { getAllToDolist, error } = useAllToDoListReactQuery();

  if (error) return <div>Failed to load</div>;
  if (!getAllToDolist) return <div>Loading...</div>;
  return (
    <Box sx={{ my: 4 }}>
      {getAllToDolist &&
        getAllToDolist.map((todo) => {
          return (
            <Box margin={'5px 0px 5px 0px'} padding={'0px 5px 0px 5px'} border={'1px dashed grey'} key={todo.id}>
              <div>{'ID ' + todo.id + '   FIRSTNAME ' + todo.firstName + '   LASTNAME ' + todo.lastName}</div>
              <div>{'TODO  ' + todo.todo}</div>
              <DeleteButtonReactQuery ID={Number(todo.id)}></DeleteButtonReactQuery>
            </Box>
          );
        })}
    </Box>
  );
}
