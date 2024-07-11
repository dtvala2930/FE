import clsx from 'clsx';
import React, { ReactElement } from 'react';
import './Button.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  icon?: ReactElement;
  children?: React.ReactNode;
  themeType?:
    | 'search'
    | 'search-MW-94'
    | 'search-MW-130'
    | 'clear'
    | 'clear-MW-110'
    | 'clear'
    | 'add'
    | 'login'
    | 'cancel'
    | 'cancel-MW-114'
    | 'submit'
    | 'submit-H-33-MW-114'
    | 'submit-MW-130'
    | 'submit-MT-30'
    | 'move'
    | 'move-MW-95'
    | 'gray'
    | 'gray-FW'
    | 'gray-MW-94'
    | 'green'
    | 'green-FW'
    | 'green-MW-94'
    | 'icon'
    | 'remove'
    | 'submit-draff'
    | 'submit-draff-MW-130'
    | 'nav'
    | 'BG_40804F'
    | 'BG_7BA9FF_BR'
    | 'close'
    | 'to-detail-calendar'
    | 'calendar-more'
    | 'green-MW-145'
    | 'cancel-MW-145'
    | 'text-link';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = '', icon = '', themeType, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx('btn', themeType && `btn--${themeType}`, className)}
        {...props}
      >
        {icon} {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
