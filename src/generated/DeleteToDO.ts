/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TodoListDeleteInputType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteToDO
// ====================================================

export interface DeleteToDO_DeleteToDo {
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
}

export interface DeleteToDO {
  DeleteToDo: DeleteToDO_DeleteToDo;
}

export interface DeleteToDOVariables {
  deleteTODO: TodoListDeleteInputType;
}
