import { gql } from 'graphql-request';
import { getAllToDolist } from '@/generated/getAllToDolist';
import { useQuery } from 'react-query';
import { gqlfetcher } from '@/fetch/fetcher';

//変数なしquery
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

const useAllToDoListReactQuery = () => {
  const { data, error } = useQuery<getAllToDolist>(['getAllToDolist'], () => gqlfetcher(getAllToDolist_Q), {
    refetchInterval: 3000,
  });
  return { getAllToDolist: data?.getAllToDolist, error: error };
};

export default useAllToDoListReactQuery;
