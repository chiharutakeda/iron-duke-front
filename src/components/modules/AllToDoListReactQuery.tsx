import * as React from 'react';
import Box from '@material-ui/core/Box';
import DeleteButtonReactQuery from '@/components/atoms/DeleteButtonReactQuery';
import useAllToDoListReactQuery from '@/hooks/useAllToDoListReactQuery';
import styles from './styles/AllToDolist.module.css';

const AllToDoListReactQuery = () => {
  const { getAllToDolist, error } = useAllToDoListReactQuery();

  if (error) return <div>Failed to load</div>;
  if (!getAllToDolist) return <div>Loading...</div>;
  return (
    <Box sx={{ my: 4 }}>
      {getAllToDolist &&
        getAllToDolist.map((todo) => {
          return (
            <Box className={styles.AllToDolist} key={todo.id}>
              <div>{'ID ' + todo.id + '   FIRSTNAME ' + todo.firstName + '   LASTNAME ' + todo.lastName}</div>
              <div className={styles.ToDolist}>{'TODO  ' + todo.todo}</div>
              <DeleteButtonReactQuery ID={Number(todo.id)}></DeleteButtonReactQuery>
            </Box>
          );
        })}
    </Box>
  );
};

export default AllToDoListReactQuery;