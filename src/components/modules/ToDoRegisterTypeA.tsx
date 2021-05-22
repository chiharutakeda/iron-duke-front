import React, { useReducer } from 'react';
import {
  ToDoRegistReducer,
  initialToDoRegist,
} from '@/reducer/toDoRegistReducer';
import { registToDolist } from '@/fetch/fetcher';
import AtomButton from '@/components/atoms/AtomButton';
import AtomText from '@/components/atoms/AtomText';
import AtomTextArea from '@/components/atoms/AtomTextArea';

const ToDoRegisterTypeA = () => {
  const [state, dispatch] = useReducer(
    ToDoRegistReducer,
    initialToDoRegist
  );
  return (
    <>
      <h1>Regist TypeA</h1>
      <form>
        <AtomText
          className="NORMAL"
          value={state.todo.firstName}
          placeholder="田中"
          onChangeFnc={(e) => {
            dispatch({
              type: 'CHANGE_FIRST_NAME',
              payload: e.target.value,
            });
          }}
        />
        <AtomText
          className="NORMAL"
          value={state.todo.lastName}
          placeholder="太郎"
          onChangeFnc={(e) => {
            dispatch({
              type: 'CHANGE_LAST_NAME',
              payload: e.target.value,
            });
          }}
        />
        <AtomTextArea
          className="NORMAL"
          value={state.todo.todo}
          placeholder="TODO"
          onChangeFnc={(
            e: React.ChangeEvent<HTMLTextAreaElement>
          ) => {
            dispatch({
              type: 'CHANGE_TODO',
              payload: e.target.value,
            });
          }}
        />
        <AtomButton
          buttonType="REGIST"
          isDisable={
            !state.todo.todo ||
            !state.todo.firstName ||
            !state.todo.lastName
          }
          fnc={() => registToDolist(state)}
        />
      </form>
    </>
  );
};

export default ToDoRegisterTypeA;
