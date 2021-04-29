import React, { useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useRegistToDoMutation } from '@/generated/graphql';
import { ToDoRegistReducer, initialToDoRegist } from '@/reducer/toDoRegistReducer';

const ToDoRegisterApollo = () => {
  const [state, dispatch] = useReducer(ToDoRegistReducer, initialToDoRegist);
  const [registToDoMutation] = useRegistToDoMutation({
    variables: state,
  });
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Regist with Apollo
      </Typography>
      <form>
        <TextField
          id="filled-basic"
          label="FIRST_NANE"
          fullWidth
          value={state.todo.firstName}
          onChange={(e) => {
            dispatch({ type: 'CHANGE_FIRST_NAME', payload: e.target.value });
          }}
        />
        <TextField
          id="filled-basic"
          label="LAST_NAME"
          fullWidth
          value={state.todo.lastName}
          onChange={(e) => {
            dispatch({ type: 'CHANGE_LAST_NAME', payload: e.target.value });
          }}
        />
        <TextField
          id="filled-basic"
          label="TODO"
          fullWidth
          multiline={true}
          rows="3"
          value={state.todo.todo}
          onChange={(e) => {
            dispatch({ type: 'CHANGE_TODO', payload: e.target.value });
          }}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={!state.todo.todo || !state.todo.firstName || !state.todo.lastName}
          onClick={() => registToDoMutation()}
        >
          Regist
        </Button>
      </form>
    </>
  );
};

export default ToDoRegisterApollo;
