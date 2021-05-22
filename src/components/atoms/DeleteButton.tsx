import { gqlfetcher } from '@/fetch/fetcher';
import { DeleteToDOVariables } from '@/generated/DeleteToDO';
import { deleteToDolist_M } from '@/gql/gql';
import styles from './styles/DeleteButton.module.css';

const DeleteButton = (deleteId: { ID: number }) => {
  return (
    <button
      className={styles.DeleteButton}
      onClick={() => {
        const deleteToDolist_V: DeleteToDOVariables = {
          deleteTODO: deleteId,
        };
        gqlfetcher(deleteToDolist_M, deleteToDolist_V);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
