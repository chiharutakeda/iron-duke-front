import React from 'react';
import AtomButton from '@/components/atoms/AtomButton';
import { getAllToDolist_getAllToDolist } from '@/generated/getAllToDolist';
import { deleteToDolist } from '@/fetch/fetcher';
import styles from './styles/AllToDolist.module.css';

type ToDoTypeA = {
  todo: getAllToDolist_getAllToDolist;
};

const ToDoTypeA = ({ todo }: ToDoTypeA) => {
  return (
    <div className={styles.AllToDolist}>
      <p>
        <span>{'ID ' + todo.id}</span>
        <span>{'FIRSTNAME ' + todo.firstName}</span>
        <span>{'LASTNAME ' + todo.lastName}</span>
      </p>
      <p>{'TODO ' + todo.todo}</p>
      <AtomButton
        buttonType="DELETE"
        fnc={() => {
          deleteToDolist({ deleteTODO: { ID: Number(todo.id) } });
        }}
      />
    </div>
  );
};

export default ToDoTypeA;
