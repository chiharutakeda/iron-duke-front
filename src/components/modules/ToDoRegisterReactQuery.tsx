import React, { useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { gqlfetcher } from '@/fetch/fetcher';
import { gql } from 'graphql-request';
import { ToDoRegistReducer, initialToDoRegist } from '@/reducer/toDoRegistReducer';
import { useMutation } from 'react-query';

//この変数に与える型はサーバー側の型をschemaを参照する。
const registToDolist_M = gql`
  mutation RegistToDo($todo: TodoListInputType!) {
    RegistToDo(todo: $todo) {
      id
      firstName
      lastName
      todo
    }
  }
`;

const ToDoRegisterReactQuery = () => {
  const [state, dispatch] = useReducer(ToDoRegistReducer, initialToDoRegist);
  const {mutate} = useMutation('RegistToDo', () => gqlfetcher(registToDolist_M, state));
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Regist To Do with react-query
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
          onClick={() => {
            mutate()
          }}
        >
          Regist
        </Button>
      </form>
    </>
  );
};

export default ToDoRegisterReactQuery;
