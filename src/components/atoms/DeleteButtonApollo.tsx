import { useDeleteToDoMutation } from '@/generated/graphql';
import styles from './styles/DeleteButton.module.css';

const DeleteButtonApollo = (deleteId: { ID: number }) => {
  const [deleteToDoMutation] = useDeleteToDoMutation({
    variables: {
      deleteTODO: deleteId,
    },
  });
  return (
    <button className={styles.DeleteButton} onClick={() => deleteToDoMutation()}>
      Delete
    </button>
  );
};

export default DeleteButtonApollo;
