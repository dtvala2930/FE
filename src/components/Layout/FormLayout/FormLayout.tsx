import { ReactNode } from 'react';

type ContentLayoutMockupProps = {
  children: ReactNode;
};

export const FormLayout = ({ children }: ContentLayoutMockupProps) => {
  return <div className="form__body panel-border panel-box">{children}</div>;
};
