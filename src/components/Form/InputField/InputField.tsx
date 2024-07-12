import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { ErrorMessage } from '../ErrorMessage';

import './InputField.scss';
import { Button } from '@/components/Elemements';

export type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  className?: string;
  icon?: ReactElement;
  registration?: Partial<UseFormRegisterReturn>;
  required?: boolean;
  error?: string;
  showClearBtn?: boolean;
};

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { id, className, registration, icon, error, showClearBtn, ...props },
    ref,
  ) => {
    return (
      <div className="form-item-control-group">
        <div className="form-item-control">
          {icon}
          <input
            autoComplete="off"
            ref={ref}
            id={id}
            className={clsx('in', className)}
            {...registration}
            {...props}
          />
          {error && <ErrorMessage textError={error} />}
          {showClearBtn && (
            <Button themeType="icon" type="button">
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          )}
        </div>
      </div>
    );
  },
);

InputField.displayName = 'InputField';
