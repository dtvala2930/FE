import {
  faUser,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';

import { Link } from '../Elemements/Link';

import { useLogout, useUser } from '@/libs/auth';

import './Header.scss';

type HeadProps = {
  isHiddenSidebar: boolean;
  toggleSidebar: () => void;
};

export const Header = ({ isHiddenSidebar, toggleSidebar }: HeadProps) => {
  const user = useUser();
  const logout = useLogout();

  const [openMenuAuth, setOpenMenuAuth] = useState(false);
  const toggleMenuAuth = () => {
    setOpenMenuAuth(!openMenuAuth);
  };

  const onLogout = () => {
    logout.mutate({});
  };

  return (
    <div className={clsx('header')}>
      <Link to="/">
        <span>Interview</span>
      </Link>
      <div className="header__menu">
        <div
          className="menu__label"
          onClick={toggleMenuAuth}
          role="presentation"
        >
          <FontAwesomeIcon
            className="menu__label-icon-left"
            icon={faUser}
            color="#fff"
          />
          <div>{user.data?.email} 様</div>
          <FontAwesomeIcon
            className="menu__label-icon-right"
            icon={openMenuAuth ? faChevronUp : faChevronDown}
            color="#fff"
          />
          {openMenuAuth ? (
            <ul className="menu__main">
              <li>
                <Link to="/" onClick={onLogout}>
                  Log out
                </Link>
              </li>
            </ul>
          ) : null}
        </div>
        <div
          className={clsx('menu__mobile-btn', isHiddenSidebar && 'active')}
          onClick={toggleSidebar}
          role="presentation"
        >
          <div className="menu__mobile-btn--main">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
