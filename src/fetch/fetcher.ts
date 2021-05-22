import { request } from 'graphql-request';
import { DeleteToDOVariables } from '@/generated/DeleteToDO';
import { RegistToDoVariables } from '@/generated/RegistToDo';
import { deleteToDolist_M, registToDolist_M } from '@/gql/gql';
/*
gqlfetcherとnormalFetcherは同じ機能。methodとかheadersとか書かなくてよくなるしres.jsonとかも
内包してもらえて短く書ける
*/
export const API_ENDPOINT = 'http://localhost:4000/graphql';

/*
graphql-request使えばかなりシンプルになる
このgqlfetcherにquery投げてもmutate投げても使える
変数はあってもなくてもよいのでオプショナル
*/
export const gqlfetcher = <T>(query: string, variables?: T) =>
  request(API_ENDPOINT, query, variables);

export const deleteToDolist = async (
  variables: DeleteToDOVariables
) => {
  await request(API_ENDPOINT, deleteToDolist_M, variables);
};

export const registToDolist = async (
  variables: RegistToDoVariables
) => {
  await request(API_ENDPOINT, registToDolist_M, variables);
};

//ただのfetchでもできるけどちょっと長い
export const normalFetcher = (query: String) => {
  fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);
};
