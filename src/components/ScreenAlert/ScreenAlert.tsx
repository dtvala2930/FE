import * as React from 'react';

import './ScreenAlert.scss';
import { Link } from '../Elemements/Link';

export type ScreenAlertProps = {
  title: string;
  code: string;
};

export const ScreenAlert = (props: ScreenAlertProps) => {
  return (
    <div className="screen-alert">
      <div className="screen-alert__body">
        <div className="screen-alert--title">{props.title}</div>
        <div className="screen-alert--code">{props.code}</div>
        <Link className="screen-alert--link" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};
