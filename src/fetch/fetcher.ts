import { request } from 'graphql-request';

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

//ただのfetchでもできるけどちょっと長い
export const normalFetcher = (query: String) =>
  fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);
