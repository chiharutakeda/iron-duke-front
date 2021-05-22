export const initialToDoRegist: TypeToDoRegistState = {
  //入力値をそのまま渡せるような形にする。
  //これ重要テクな気がする。
  todo: {
    firstName: '',
    lastName: '',
    todo: '',
  },
};

type TypeToDoRegistState = {
  todo: {
    firstName: string;
    lastName: string;
    todo: string;
  };
};

type TypeToDoRegist =
  | { type: 'CHANGE_FIRST_NAME'; payload: string }
  | { type: 'CHANGE_LAST_NAME'; payload: string }
  | { type: 'CHANGE_TODO'; payload: string };

export const ToDoRegistReducer = (
  state: TypeToDoRegistState,
  action: TypeToDoRegist
): TypeToDoRegistState => {
  switch (action.type) {
    case 'CHANGE_FIRST_NAME':
      return {
        ...state,
        todo: { ...state.todo, firstName: action.payload },
      };
    case 'CHANGE_LAST_NAME':
      return {
        ...state,
        todo: { ...state.todo, lastName: action.payload },
      };
    case 'CHANGE_TODO':
      return {
        ...state,
        todo: { ...state.todo, todo: action.payload },
      };
    default:
      return { ...state };
  }
};
