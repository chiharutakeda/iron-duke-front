import {UserInfoInputType} from '@/generated/globalTypes'

export const initialUserForm: UserInfoInputType = {
  email: '',
  password: '',
};

type TypeUser = { type: 'CHANGE_EMAIL'; payload: string } | { type: 'CHANGE_PASSWORD'; payload: string };

export const userRegistReducer = (state: UserInfoInputType, action: TypeUser): UserInfoInputType => {
  switch (action.type) {
    case 'CHANGE_EMAIL':
      return { ...state, email: action.payload };
    case 'CHANGE_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return { ...state };
  }
};
