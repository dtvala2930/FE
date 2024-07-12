import clsx from 'clsx';
import { ReactElement } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

import './Link.scss';

export type LinkPropsModel = LinkProps & {
  themeType?:
    | 'open-link'
    | 'box-gray'
    | 'box-green'
    | 'ellipsis'
    | 'success'
    | 'gray'
    | 'green'
    | 'to-detail-calendar'
    | 'to-detail'
    | 'cancel'
    | 'text-link';
  icon?: ReactElement;
  isNew?: boolean;
};
export const Link = ({
  className,
  children,
  themeType,
  isNew,
  icon,

  ...props
}: LinkPropsModel) => {
  return (
    <RouterLink
      className={clsx('link', className, themeType && `link--${themeType}`)}
      {...props}
    >
      {isNew && <span className="link__is-new">New</span>} {icon}
      {children}
    </RouterLink>
  );
};
