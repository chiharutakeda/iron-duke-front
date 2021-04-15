import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { gqlfetcher } from '@/fetch/fetcher';
//変数なしmutate
const registToDolist_M = `mutation{
  RegistToDo(todo:{firstName:"takeday",lastName:"chiharu",todo:"nextstage"}){
    id
    firstName
    lastName
    todo
  }
}`;
const ToDoRegister = () => {
  return (
    <form>
      <TextField id="filled-basic" label="FIRST_NANE" fullWidth />
      <TextField id="filled-basic" label="LAST_NAME"  fullWidth />
      <TextField id="filled-basic" label="TODO"  fullWidth multiline={true} rows="3"/>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          gqlfetcher(registToDolist_M);
        }}
      >
        Regist
      </Button>
    </form>
  );
};

export default ToDoRegister;
