import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};


export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  RegistToDo?: Maybe<TodoListEntity>;
  DeleteToDo: TodoListEntity;
  Login?: Maybe<LoginResponse>;
  createUser?: Maybe<UserInfoEntity>;
};


export type MutationRegistToDoArgs = {
  todo: TodoListInputType;
};


export type MutationDeleteToDoArgs = {
  deleteTODO: TodoListDeleteInputType;
};


export type MutationLoginArgs = {
  LoginData: UserInfoInputType;
};


export type MutationCreateUserArgs = {
  UserData: UserInfoInputType;
};

export type Query = {
  __typename?: 'Query';
  sampleHello: Scalars['String'];
  getToDolist?: Maybe<TodoListEntity>;
  getAllToDolist?: Maybe<Array<TodoListEntity>>;
  getAllUser?: Maybe<Array<UserInfoEntity>>;
};

export type TodoListDeleteInputType = {
  ID: Scalars['Float'];
};

export type TodoListEntity = {
  __typename?: 'TodoListEntity';
  id: Scalars['ID'];
  /** 苗字を返す */
  firstName: Scalars['String'];
  /** 名前を返す */
  lastName: Scalars['String'];
  /** やることリストを返す */
  todo: Scalars['String'];
  /** 登録日を返す */
  createdAt: Scalars['DateTime'];
};

export type TodoListInputType = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  todo: Scalars['String'];
};

export type UserInfoEntity = {
  __typename?: 'UserInfoEntity';
  id: Scalars['ID'];
  /** emailを返す */
  email: Scalars['String'];
  /** passwordを返す */
  password: Scalars['String'];
  /** 登録日を返す */
  createdAt: Scalars['DateTime'];
};

export type UserInfoInputType = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type DeleteToDoMutationVariables = Exact<{
  deleteTODO: TodoListDeleteInputType;
}>;


export type DeleteToDoMutation = (
  { __typename?: 'Mutation' }
  & { DeleteToDo: (
    { __typename?: 'TodoListEntity' }
    & Pick<TodoListEntity, 'id' | 'firstName' | 'lastName'>
  ) }
);

export type GetAllToDolistQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllToDolistQuery = (
  { __typename?: 'Query' }
  & { getAllToDolist?: Maybe<Array<(
    { __typename?: 'TodoListEntity' }
    & Pick<TodoListEntity, 'id' | 'firstName' | 'lastName' | 'todo' | 'createdAt'>
  )>> }
);

export type RegistToDoMutationVariables = Exact<{
  todo: TodoListInputType;
}>;


export type RegistToDoMutation = (
  { __typename?: 'Mutation' }
  & { RegistToDo?: Maybe<(
    { __typename?: 'TodoListEntity' }
    & Pick<TodoListEntity, 'id' | 'firstName' | 'lastName' | 'todo'>
  )> }
);


export const DeleteToDoDocument = gql`
    mutation DeleteToDO($deleteTODO: TodoListDeleteInputType!) {
  DeleteToDo(deleteTODO: $deleteTODO) {
    id
    firstName
    lastName
  }
}
    `;
export type DeleteToDoMutationFn = Apollo.MutationFunction<DeleteToDoMutation, DeleteToDoMutationVariables>;

/**
 * __useDeleteToDoMutation__
 *
 * To run a mutation, you first call `useDeleteToDoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteToDoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteToDoMutation, { data, loading, error }] = useDeleteToDoMutation({
 *   variables: {
 *      deleteTODO: // value for 'deleteTODO'
 *   },
 * });
 */
export function useDeleteToDoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteToDoMutation, DeleteToDoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteToDoMutation, DeleteToDoMutationVariables>(DeleteToDoDocument, options);
      }
export type DeleteToDoMutationHookResult = ReturnType<typeof useDeleteToDoMutation>;
export type DeleteToDoMutationResult = Apollo.MutationResult<DeleteToDoMutation>;
export type DeleteToDoMutationOptions = Apollo.BaseMutationOptions<DeleteToDoMutation, DeleteToDoMutationVariables>;
export const GetAllToDolistDocument = gql`
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

/**
 * __useGetAllToDolistQuery__
 *
 * To run a query within a React component, call `useGetAllToDolistQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllToDolistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllToDolistQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllToDolistQuery(baseOptions?: Apollo.QueryHookOptions<GetAllToDolistQuery, GetAllToDolistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllToDolistQuery, GetAllToDolistQueryVariables>(GetAllToDolistDocument, options);
      }
export function useGetAllToDolistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllToDolistQuery, GetAllToDolistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllToDolistQuery, GetAllToDolistQueryVariables>(GetAllToDolistDocument, options);
        }
export type GetAllToDolistQueryHookResult = ReturnType<typeof useGetAllToDolistQuery>;
export type GetAllToDolistLazyQueryHookResult = ReturnType<typeof useGetAllToDolistLazyQuery>;
export type GetAllToDolistQueryResult = Apollo.QueryResult<GetAllToDolistQuery, GetAllToDolistQueryVariables>;
export const RegistToDoDocument = gql`
    mutation RegistToDo($todo: TodoListInputType!) {
  RegistToDo(todo: $todo) {
    id
    firstName
    lastName
    todo
  }
}
    `;
export type RegistToDoMutationFn = Apollo.MutationFunction<RegistToDoMutation, RegistToDoMutationVariables>;

/**
 * __useRegistToDoMutation__
 *
 * To run a mutation, you first call `useRegistToDoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistToDoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registToDoMutation, { data, loading, error }] = useRegistToDoMutation({
 *   variables: {
 *      todo: // value for 'todo'
 *   },
 * });
 */
export function useRegistToDoMutation(baseOptions?: Apollo.MutationHookOptions<RegistToDoMutation, RegistToDoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegistToDoMutation, RegistToDoMutationVariables>(RegistToDoDocument, options);
      }
export type RegistToDoMutationHookResult = ReturnType<typeof useRegistToDoMutation>;
export type RegistToDoMutationResult = Apollo.MutationResult<RegistToDoMutation>;
export type RegistToDoMutationOptions = Apollo.BaseMutationOptions<RegistToDoMutation, RegistToDoMutationVariables>;