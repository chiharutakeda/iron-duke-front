/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TodoListInputType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: RegistToDo
// ====================================================

export interface RegistToDo_RegistToDo {
  __typename: "TodoListEntity";
  id: string;
  /**
   * 苗字を返す
   */
  firstName: string;
  /**
   * 名前を返す
   */
  lastName: string;
  /**
   * やることリストを返す
   */
  todo: string;
}

export interface RegistToDo {
  RegistToDo: RegistToDo_RegistToDo;
}

export interface RegistToDoVariables {
  todo: TodoListInputType;
}
