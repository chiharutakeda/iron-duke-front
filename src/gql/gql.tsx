import { gql } from 'graphql-request';
export const deleteToDolist_M = gql`
  mutation DeleteToDO($deleteTODO: TodoListDeleteInputType!) {
    DeleteToDo(deleteTODO: $deleteTODO) {
      id
      firstName
      lastName
    }
  }
`;
export const registToDolist_M = gql`
  mutation RegistToDo($todo: TodoListInputType!) {
    RegistToDo(todo: $todo) {
      id
      firstName
      lastName
      todo
    }
  }
`;
export const getAllToDolist_Q = gql`
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

export const createUser_M = gql`
  mutation CreateUserMutation($createUserUserData: UserInfoInputType!) {
    createUser(UserData: $createUserUserData) {
      id
      email
      password
      createdAt
    }
  }
`;