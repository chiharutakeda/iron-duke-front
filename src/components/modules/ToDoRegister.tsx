import React, { useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import { gqlfetcher } from '@/fetch/fetcher';
import {
  ToDoRegistReducer,
  initialToDoRegist,
} from '@/reducer/toDoRegistReducer';
// import { registToDolist_M } from '@/gql/gql';
import styles from './styles/ToDoRegister.module.css';
import { registToDolist } from '@/fetch/fetcher';

const ToDoRegister = () => {
  const [state, dispatch] = useReducer(
    ToDoRegistReducer,
    initialToDoRegist
  );
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Regist
      </Typography>
      <form>
        <TextField
          className={styles.ToDoregister}
          label="FIRST_NANE"
          fullWidth
          value={state.todo.firstName}
          onChange={(e) => {
            dispatch({
              type: 'CHANGE_FIRST_NAME',
              payload: e.target.value,
            });
          }}
        />
        <TextField
          className={styles.ToDoregister}
          label="LAST_NAME"
          fullWidth
          value={state.todo.lastName}
          onChange={(e) => {
            dispatch({
              type: 'CHANGE_LAST_NAME',
              payload: e.target.value,
            });
          }}
        />
        <TextField
          className={styles.ToDoregister}
          label="TODO"
          fullWidth
          multiline={true}
          rows="3"
          value={state.todo.todo}
          onChange={(e) => {
            dispatch({
              type: 'CHANGE_TODO',
              payload: e.target.value,
            });
          }}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={
            !state.todo.todo ||
            !state.todo.firstName ||
            !state.todo.lastName
          }
          onClick={() => {
            registToDolist(state);
          }}
        >
          Regist
        </Button>
      </form>
    </>
  );
};

export default ToDoRegister;
