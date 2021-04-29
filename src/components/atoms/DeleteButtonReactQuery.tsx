import { gql } from 'graphql-request';
import { gqlfetcher } from '@/fetch/fetcher';
import { useMutation } from 'react-query';

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

const DeleteButtonReactQuery = (deleteId: { ID: number }) => {
  const {mutate} = useMutation('DeleteToDO', () => gqlfetcher(deleteToDolist_M, { deleteTODO: deleteId }));
  return (
    <button
      style={style}
      onClick={() => {
        mutate();
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButtonReactQuery;
