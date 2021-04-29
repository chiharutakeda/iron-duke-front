import * as React from 'react';
import Box from '@material-ui/core/Box';
import DeleteButtonApollo from '@/components/atoms/DeleteButtonApollo';
import useAllToDoListApollo from '@/hooks/useAllToDoListApollo';

const AllToDoListApollo = () => {
  const { getAllToDolist, error } = useAllToDoListApollo();

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
              <DeleteButtonApollo ID={Number(todo.id)}></DeleteButtonApollo>
            </Box>
          );
        })}
    </Box>
  );
};
export default AllToDoListApollo;
