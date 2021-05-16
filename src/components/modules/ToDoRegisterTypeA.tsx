import React, { useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import { ToDoRegistReducer, initialToDoRegist } from '@/reducer/toDoRegistReducer';
import { registToDolist } from '@/fetch/fetcher';
import styles from './styles/ToDoRegister.module.css';
import AtomButton from '@/components/atoms/AtomButton';

const ToDoRegisterTypeA = () => {
  const [state, dispatch] = useReducer(ToDoRegistReducer, initialToDoRegist);
  return (
    <>
      <h1>Regist TypeA</h1>
      <form>
        <TextField
          className={styles.ToDoregister}
          label="FIRST_NANE"
          fullWidth
          value={state.todo.firstName}
          onChange={(e) => {
            dispatch({ type: 'CHANGE_FIRST_NAME', payload: e.target.value });
          }}
        />
        <TextField
          className={styles.ToDoregister}
          label="LAST_NAME"
          fullWidth
          value={state.todo.lastName}
          onChange={(e) => {
            dispatch({ type: 'CHANGE_LAST_NAME', payload: e.target.value });
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
            dispatch({ type: 'CHANGE_TODO', payload: e.target.value });
          }}
        />
        <AtomButton
          buttonType="REGIST"
          isDisable={!state.todo.todo || !state.todo.firstName || !state.todo.lastName}
          fnc={()=>registToDolist(state)}
        />
      </form>
    </>
  );
};

export default ToDoRegisterTypeA;
