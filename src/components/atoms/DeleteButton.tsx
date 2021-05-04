import { gqlfetcher } from '@/fetch/fetcher';
import { DeleteToDOVariables } from '@/generated/DeleteToDO';
import { deleteToDolist_M } from '@/gql/gql';

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
