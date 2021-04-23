import React from 'react';
import Button from '@material-ui/core/Button';
import { gql } from 'graphql-request';
import { gqlfetcher } from '@/fetch/fetcher';
import { DeleteToDOVariables } from '@/generated/DeleteToDO';

//この変数に与える型はサーバー側の型をschemaを参照する。
const deleteToDolist_M = gql`
  mutation DeleteToDO($deleteTODO: TodoListDeleteInputType!) {
    DeleteToDo(deleteTODO: $deleteTODO) {
      id
      firstName
      lastName
    }
  }
`;

const DeleteButton = (deleteId: { ID: number }) => {
  return (
    <Button
      variant="contained"
      color="inherit"
      onClick={() => {
        const deleteToDolist_V: DeleteToDOVariables = { deleteTODO: deleteId };
        gqlfetcher(deleteToDolist_M, deleteToDolist_V);
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
