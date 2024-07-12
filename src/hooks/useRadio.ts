import { useState } from 'react';

export const useRadio = <T>(defaultValue: T) => {
  const [value, setValue] = useState<T | undefined | any>(defaultValue);

  const onChange = (newValue: typeof defaultValue) => {
    if (typeof defaultValue === 'number') {
      setValue(newValue);
      return;
    }

    setValue(newValue);
  };

  const onReset = () => {
    setValue(defaultValue);
  };

  return {
    onChange,
    onReset,
    value,
  };
};
