import { Dispatch, SetStateAction, createContext, useContext } from 'react';

import { ScreenDevice } from '@/types';
export type GlobalContext = {
  screen: ScreenDevice;
  setScreen: Dispatch<SetStateAction<ScreenDevice>>;
};
export const GlobalContext = createContext<GlobalContext>({
  screen: 'large',
  setScreen: () => {},
});
export const useGlobalContext = () => useContext(GlobalContext);
