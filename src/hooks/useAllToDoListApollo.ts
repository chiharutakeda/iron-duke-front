import { useGetAllToDolistQuery } from '@/generated/graphql';

const useAllToDoListApollo = () => {
  const { data, error } = useGetAllToDolistQuery({
    pollInterval: 3000,
  });
  return { getAllToDolist: data?.getAllToDolist, error: error };
};

export default useAllToDoListApollo;
