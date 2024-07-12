import clsx from 'clsx';
import { ReactNode, ReactElement } from 'react';

import './ContentLayout.scss';

type ContentLayoutProps = {
  children: ReactNode;
  title?: string;
  subTitle?: string;
  className?: string;
  side?: ReactElement;
  content?: ReactElement;
  anchorLink?: ReactElement;
};

export const ContentLayout = ({
  children,
  title,
  subTitle,
  className,
  side,
  content,
  anchorLink,
}: ContentLayoutProps) => {
  return (
    <div className={clsx('main', className)}>
      <div className={clsx('main__header')}>
        {title && (
          <div className="m-header__title">
            {title} {subTitle && <span>{subTitle}</span>}
          </div>
        )}
        {side && <div className="m-header__item">{side}</div>}
      </div>
      {content && <div className="main__header-content">{content}</div>}
      {anchorLink && (
        <div className="main__header-anchor-link">{anchorLink}</div>
      )}
      <div className="main__body">{children}</div>
    </div>
  );
};
