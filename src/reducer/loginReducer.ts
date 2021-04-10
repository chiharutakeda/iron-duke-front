export const initialLoginForm: TypeLoginForm = {
  email: '',
  password: '',
};

type TypeLoginForm = {
  email: string;
  password: string;
};

type TypeLogin =
  | { type: 'CHANGE_EMAIL'; payload: string }
  | { type: 'CHANGE_PASSWORD'; payload: string };

export const loginReducer = (
  state: TypeLoginForm,
  action: TypeLogin
): TypeLoginForm => {
  switch (action.type) {
    case 'CHANGE_EMAIL':
      return { ...state,email:action.payload };
    case 'CHANGE_PASSWORD':
      return { ...state,password:action.payload };
    default:
      return { ...state };
  }
};
