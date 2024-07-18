import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { useLoading } from '@/hooks/useLoading';

import './Spinner.scss';

export type SpinnerProps = {
  className?: string;
};

export const Spinner = ({ className = '' }: SpinnerProps) => {
  const { isLoading } = useLoading();
  return (
    <>
      {isLoading && (
        <div className="loading">
          <FontAwesomeIcon
            icon={faCircleNotch}
            size="3x"
            spin
            className={clsx('loading__icon', className)}
          />
          <span className={clsx('loading__text', className)}>Loading</span>
        </div>
      )}
    </>
  );
};
