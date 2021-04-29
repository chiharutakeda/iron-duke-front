import useSWR from 'swr';
import { gqlfetcher } from '@/fetch/fetcher';
import { gql } from 'graphql-request';
import { getAllToDolist } from '@/generated/getAllToDolist';

const getAllToDolist_Q = gql`
  query getAllToDolist {
    getAllToDolist {
      id
      firstName
      lastName
      todo
      createdAt
    }
  }
`;

const useAllToDoList = () => {
  const { data, error } = useSWR<getAllToDolist>(getAllToDolist_Q, gqlfetcher, { refreshInterval: 3000 });
  return { getAllToDolist: data?.getAllToDolist, error: error };
};

export default useAllToDoList;
