import {
  faUser,
  faChevronLeft,
  faChevronRight,
  faHome,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { ReactElement, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '../Elemements';

import { GlobalContext } from '@/context/GlobalContext';
import { useUser } from '@/libs/auth';
import { SIDEBAR } from '@/utils/constants';
import cookie from '@/utils/cookie';

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
  const location = useLocation();
  const { screen } = useContext(GlobalContext);

  const currentPathname = location.pathname;

  const onNavigate = (url: string) => {
    screen !== 'large' && toggleSidebar();
  };

  useEffect(() => {
    // Add more 3000ms to make sure run this reload after expired time of cookie
    const remainingExpireTime = cookie.getRemainingExpireTime() + 3000;
    setTimeout(() => {
      const token = cookie.getToken();
      if (!token) {
        localStorage.setItem('clearSession', 'true');
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
            {SIDEBAR.DASHBOARD.LABEL}
          </Link>
        </li>
        {
          <li
            className={clsx(
              currentPathname.includes(SIDEBAR.SEARCH.TO) && 'active',
            )}
          >
            <Link
              onClick={() => onNavigate(`${SIDEBAR.SEARCH.TO}`)}
              to={SIDEBAR.SEARCH.TO}
            >
              <FontAwesomeIcon icon={faSearch} />
              {SIDEBAR.SEARCH.LABEL}
            </Link>
          </li>
        }
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
