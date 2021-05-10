/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInfoInputType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserMutation
// ====================================================

export interface CreateUserMutation_createUser {
  __typename: "UserInfoEntity";
  id: string;
  /**
   * emailを返す
   */
  email: string;
  /**
   * passwordを返す
   */
  password: string;
  /**
   * 登録日を返す
   */
  createdAt: any;
}

export interface CreateUserMutation {
  createUser: CreateUserMutation_createUser | null;
}

export interface CreateUserMutationVariables {
  createUserUserData: UserInfoInputType;
}
