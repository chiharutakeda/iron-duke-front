import useSWR from 'swr';
import { gqlfetcher } from '@/fetch/fetcher';
import { getAllToDolist } from '@/generated/getAllToDolist';
import {getAllToDolist_Q} from '@/gql/gql'

const useAllToDoList = () => {
  const { data, error } = useSWR<getAllToDolist>(getAllToDolist_Q, gqlfetcher, { refreshInterval: 3000 });
  return { getAllToDolist: data?.getAllToDolist, error: error };
};

export default useAllToDoList;
