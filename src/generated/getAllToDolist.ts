/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllToDolist
// ====================================================

export interface getAllToDolist_getAllToDolist {
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
  /**
   * 登録日を返す
   */
  createdAt: any;
}

export interface getAllToDolist {
  getAllToDolist: getAllToDolist_getAllToDolist[] | null;
}
