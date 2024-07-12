import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';

import './FormItemBlock.scss';

export type FormItemBlockProps = {
  htmlFor?: string;
  className?: string;
  classNameMain?: string;
  label?: string;
  children: ReactNode;
  titleIcon?: ReactElement;
  tooltipMsg?: string;
  themeType?: 'no-pl-main';
  required?: boolean;
  error?: string;
};

export const FormItemBlock = ({
  htmlFor,
  className,
  label,
  children,
  themeType,
  classNameMain,
  required,
  error,
}: FormItemBlockProps) => {
  return (
    <div className={clsx('form-item-block', className)}>
      <label
        htmlFor={htmlFor}
        className={clsx('form-item-block__label', required && 'require')}
      >
        <div>
          {label}
          {required && <span className="require">*</span>}
        </div>
        {error && <div className="error">{error}</div>}
      </label>
      <div
        className={clsx(
          'form-item-block__main',
          themeType && `form-item-block__main--${themeType}`,
          classNameMain,
        )}
      >
        {children}
      </div>
    </div>
  );
};
