import React, { useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { gqlfetcher } from '@/fetch/fetcher';
import { gql } from 'graphql-request';
import { ToDoRegistReducer, initialToDoRegist } from '@/reducer/toDoRegistReducer';

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

const ToDoRegister = () => {
  const [state, dispatch] = useReducer(ToDoRegistReducer, initialToDoRegist);
  return (
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
        onClick={() => {
          //stateそのまま渡せる形にしてある
          const registToDolist_V = state;
          gqlfetcher(registToDolist_M, registToDolist_V);
        }}
      >
        Regist
      </Button>
    </form>
  );
};

export default ToDoRegister;
