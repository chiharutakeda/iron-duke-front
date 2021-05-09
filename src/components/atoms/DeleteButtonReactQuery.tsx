import { gqlfetcher } from '@/fetch/fetcher';
import { useMutation } from 'react-query';
import { deleteToDolist_M } from '@/gql/gql';
import styles from './styles/Deletebutton.module.css';

const DeleteButtonReactQuery = (deleteId: { ID: number }) => {
  const { mutate } = useMutation('DeleteToDO', () => gqlfetcher(deleteToDolist_M, { deleteTODO: deleteId }));
  return (
    <button
      className={styles.DeleteButton}
      onClick={() => {
        mutate();
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButtonReactQuery;
