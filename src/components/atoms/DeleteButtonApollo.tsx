import { useDeleteToDoMutation } from '@/generated/graphql';

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

const DeleteButtonApollo = (deleteId: { ID: number }) => {
  const [deleteToDoMutation] = useDeleteToDoMutation({
    variables: {
      deleteTODO: deleteId,
    },
  });
  return (
    <button style={style} onClick={() => deleteToDoMutation()}>
      Delete
    </button>
  );
};

export default DeleteButtonApollo;
