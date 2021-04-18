import * as React from 'react';
import Container from '@material-ui/core/Container';
import AllToDoList from '@/components/modules/AllToDoList'
import ToDoRegister from '@/components/modules/ToDoRegister'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Regist To Do
        </Typography>
      </Box>
      <ToDoRegister />
      <AllToDoList />
    </Container>
  );
}
