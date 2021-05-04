import { getAllToDolist } from '@/generated/getAllToDolist';
import { useQuery } from 'react-query';
import { gqlfetcher } from '@/fetch/fetcher';
import { getAllToDolist_Q } from '@/gql/gql';

const useAllToDoListReactQuery = () => {
  const { data, error } = useQuery<getAllToDolist>(['getAllToDolist'], () => gqlfetcher(getAllToDolist_Q), {
    refetchInterval: 3000,
  });
  return { getAllToDolist: data?.getAllToDolist, error: error };
};

export default useAllToDoListReactQuery;
