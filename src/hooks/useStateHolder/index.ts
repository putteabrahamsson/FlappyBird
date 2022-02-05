import { useContext } from 'react';
import { StateContext } from '../../store/Context/StateContext';

export const useStateHolder = () => {
  const context = useContext(StateContext);

  return context;
};
