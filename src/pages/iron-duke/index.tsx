import * as React from 'react';
import Container from '@material-ui/core/Container';
import AllToDoList from '@/components/modules/AllToDoList';
import ToDoRegister from '@/components/modules/ToDoRegister';
import AllToDoListApollo from '@/components/modules/AllToDoListApollo';
import ToDoRegisterApollo from '@/components/modules/ToDoRegisterApollo';
import Box from '@material-ui/core/Box';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box>
        <ToDoRegister />
        <AllToDoList />
        <ToDoRegisterApollo />
        <AllToDoListApollo />
      </Box>
    </Container>
  );
}
