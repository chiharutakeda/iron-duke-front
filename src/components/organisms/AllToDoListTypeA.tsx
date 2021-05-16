import React from 'react';
import ToDoTypeA from '@/components/modules/ToDoTypeA';
import useAllToDoList from '@/hooks/useAllToDoList';

const AllToDoListTypeA = () => {
  const { getAllToDolist, error } = useAllToDoList();

  if (error) return <div>Failed to load</div>;
  if (!getAllToDolist) return <div>Loading...</div>;
  return (
    <>
      {getAllToDolist.map((todo) => {
        return <ToDoTypeA todo={todo} key={todo.id}/>;
      })}
    </>
  );
};

export default AllToDoListTypeA;
