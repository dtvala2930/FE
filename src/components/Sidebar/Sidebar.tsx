import {
  faUser,
  faBullhorn,
  faCircleQuestion,
  faGear,
  faLink,
  faChevronLeft,
  faChevronRight,
  faCaretRight,
  faCaretDown,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { Button } from '../Elemements';

import { useUser } from '@/libs/auth';
import { SIDEBAR } from '@/utils/constants';
import cookie, {
  setCookieForSessionExpires,
  storagePrefix,
} from '@/utils/cookie';

import './Sidebar.scss';

type MenuItem = {
  name: string;
  to: string;
  icon: ReactElement;
};

type NavMainProps = {
  toggleSidebar: () => void;
};

const NavMain = ({ toggleSidebar }: NavMainProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPathname = location.pathname;

  const onNavigate = (url: string) => {
    toggleSidebar();
    setCookieForSessionExpires(`${storagePrefix}token_url`, 'url', url);
  };

  useEffect(() => {
    // Add more 3000ms to make sure run this reload after expired time of cookie
    const remainingExpireTime = cookie.getRemainingExpireTime() + 3000;
    setTimeout(() => {
      const token = cookie.getToken();
      if (!token) {
        localStorage.setItem('clearSession', 'true');
        setCookieForSessionExpires(
          `${storagePrefix}token_url`,
          'sessionExpires',
          'true',
        );
        window.location.href = '/logout';
      }
    }, remainingExpireTime);
  }, []);

  return (
    <nav className="nav">
      <ul>
        <li
          className={clsx(SIDEBAR.DASHBOARD.TO === currentPathname && 'active')}
        >
          <Link
            to={SIDEBAR.DASHBOARD.TO}
            onClick={() => onNavigate(`${SIDEBAR.DASHBOARD.TO}`)}
          >
            <FontAwesomeIcon icon={faHome} />
            {`${SIDEBAR.DASHBOARD.LABEL}`}
          </Link>
        </li>
        {/* {user.data?.roles.notifications.screen && (
          <li
            className={clsx(
              currentPathname.includes(SIDEBAR.NOTIFICATIONS.TO) && 'active',
            )}
          >
            <Link
              to={isHandleLeavePage ? `#` : `${SIDEBAR.NOTIFICATIONS.TO}`}
              onClick={() => onNavigate(`${SIDEBAR.NOTIFICATIONS.TO}`)}
            >
              <FontAwesomeIcon icon={faBullhorn} />
              {t(SIDEBAR.NOTIFICATIONS.LABEL)}
            </Link>
          </li>
        )} */}
      </ul>
    </nav>
  );
};

export type SidebarProps = {
  isHiddenSidebar: boolean;
  toggleSidebar: () => void;
};

export const Sidebar = ({ isHiddenSidebar, toggleSidebar }: SidebarProps) => {
  const user = useUser();

  return (
    <div className="slidebar-main">
      <Button className="btn-sidebar" onClick={toggleSidebar} type="button">
        <FontAwesomeIcon
          className="menu__label-icon-right"
          icon={isHiddenSidebar ? faChevronRight : faChevronLeft}
          color="#68937D"
        />
      </Button>
      <div className="slidebar-main--inner">
        <div className="slidebar-main__auth">
          <div className="slidebar-main__auth--account">
            <FontAwesomeIcon icon={faUser} />
            {user.data?.email}
          </div>
          <Link className="slidebar-main__auth--logout" to="/logout">
            Logout
          </Link>
        </div>
        <div className="slidebar-main__menu">
          <NavMain toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </div>
  );
};
