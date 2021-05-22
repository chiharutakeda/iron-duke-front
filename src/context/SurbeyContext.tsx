import { createContext, useReducer } from 'react';
import { TypeContext } from '@/reducer/surbeyReducer';
import { surbeyReducer, initialSurbey } from '@/reducer/surbeyReducer';
const Context = createContext<TypeContext>({} as TypeContext);


const SurbeyContext = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(surbeyReducer, initialSurbey);
  return <Context.Provider value={{ dispatch: dispatch, state: state }}>{children}</Context.Provider>;
};

export default SurbeyContext;
