import dayjs from 'dayjs';
import { useState } from 'react';

import { GlobalContext } from './GlobalContext';

import { ScreenDevice } from '@/types';

export const ContextWrapper = (props: any) => {
  const [screen, setScreen] = useState<ScreenDevice>('large');
  return (
    <GlobalContext.Provider
      value={{
        screen,
        setScreen,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
