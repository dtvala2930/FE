import { useState } from 'react';

export const useSelectField = <T>(defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue);

  const onChange = (newValue: T | any) => {
    setValue(newValue);
  };

  const onReset = () => {
    setValue(defaultValue);
  };

  const onClearAll = () => {
    setValue(() => [] as unknown as T);
  };

  return {
    onChange,
    onReset,
    value,
    onClearAll,
  };
};
