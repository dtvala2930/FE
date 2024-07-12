import clsx from 'clsx';
import './ErrorMessage.scss';

export type ErrorMessageProps = {
  textError?: string;
  className?: string;
  themeType?: 'UNDER-LABEL';
};

export const ErrorMessage = ({
  textError,
  className,
  themeType,
}: ErrorMessageProps) => {
  return (
    <div
      className={clsx(
        'form-item-error',
        className,
        themeType && `form-item-error--${themeType}`,
      )}
    >
      {textError}
    </div>
  );
};
