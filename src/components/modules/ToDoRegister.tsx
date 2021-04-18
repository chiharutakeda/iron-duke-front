import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { gqlfetcher } from '@/fetch/fetcher';

//この変数に与える型はサーバー側の型をschemaを参照する。
const registToDolist_M = `
  mutation RegistToDo($todo: TodoListInputType!) {
    RegistToDo(todo: $todo) {
      id
      firstName
      lastName
      todo
    }
  },
`;

//変数の渡し方慣れないと難しい
const registToDolist_V = {
  todo: {
    firstName: 'takeda',
    lastName: 'chiahru',
    todo: 'hello',
  },
};

const ToDoRegister = () => {
  return (
    <form>
      <TextField id="filled-basic" label="FIRST_NANE" fullWidth />
      <TextField id="filled-basic" label="LAST_NAME" fullWidth />
      <TextField id="filled-basic" label="TODO" fullWidth multiline={true} rows="3" />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          gqlfetcher(registToDolist_M, registToDolist_V);
        }}
      >
        Regist
      </Button>
    </form>
  );
};

export default ToDoRegister;
