import { request } from 'graphql-request';

export const API_ENDPOINT = 'http://localhost:4000/graphql';

//graphql-request使えばかなりシンプルになる
export const gqlfetcher = (query:string) => request('/api/graphql', query);

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
