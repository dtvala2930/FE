import clsx from 'clsx';
import { ReactNode, ReactElement } from 'react';

import './ContentLayoutMockup.scss';

type ContentLayoutMockupProps = {
  children: ReactNode;
  title?: string;
  subTitle?: string;
  className?: string;
  sideLeft?: ReactElement;
  sideRight?: ReactElement;
};

export const ContentLayoutMockup = ({
  children,
  title,
  subTitle,
  className,
  sideLeft,
  sideRight,
}: ContentLayoutMockupProps) => {
  return (
    <>
      <div className={clsx('main-mockup', className)}>
        <div className={clsx('main-mockup__header')}>
          {title && (
            <div className="m-header__title">
              <h1>{title}</h1> {subTitle && <span>{subTitle}</span>}
            </div>
          )}
          {sideLeft && <div className="m-header__item">{sideLeft}</div>}
          {sideRight && <div className="m-header__right">{sideRight}</div>}
        </div>
        <div className="main-mockup__body">{children}</div>
      </div>
    </>
  );
};
