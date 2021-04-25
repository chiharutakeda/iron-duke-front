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

const style = {
  margin: '3px 0px',
  height: '2rem',
  width: 'auto',
  color: 'black',
  background: '#CC0000',
  borderRadius: '5px',
  borderStyle: 'none',
  boxShadow: '1px 1px 4px',
  cursor: 'pointer',
};

const DeleteButton = (deleteId: { ID: number }) => {
  return (
    <button
      style={style}
      onClick={() => {
        const deleteToDolist_V: DeleteToDOVariables = { deleteTODO: deleteId };
        gqlfetcher(deleteToDolist_M, deleteToDolist_V);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
