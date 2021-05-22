export const initialSurbey: TypeSurbey = {
  impressionFirst: '',
  impressionSecond: '',
  impressionThird: '',
};

export type TypeSurbey = {
  impressionFirst: string;
  impressionSecond: string;
  impressionThird: string;
};

type TypeSurbeyAction =
  | { type: 'CHANGE_IMPRESSIONFIRST'; payload: string }
  | { type: 'CHANGE_IMPRESSIONSECOND'; payload: string }
  | { type: 'CHANGE_IMPRESSIONTHIRD'; payload: string };

export type TypeContext = {
  dispatch: React.Dispatch<TypeSurbeyAction>;
  state: TypeSurbey;
};
export const surbeyReducer = (state: TypeSurbey, action: TypeSurbeyAction): TypeSurbey => {
  switch (action.type) {
    case 'CHANGE_IMPRESSIONFIRST':
      return { ...state, impressionFirst: action.payload };
    case 'CHANGE_IMPRESSIONSECOND':
      return { ...state, impressionSecond: action.payload };
    case 'CHANGE_IMPRESSIONTHIRD':
      return { ...state, impressionThird: action.payload };
    default:
      return { ...state };
  }
};
