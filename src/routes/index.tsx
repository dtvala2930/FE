import { findIndex, cloneDeep } from 'lodash';
import { useEffect } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';

import { privateRoutes } from './private';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

import { useNotification } from '@/hooks/useNotifications';
import { useUser } from '@/libs/auth';
import { useNavigateStore } from '@/stores/navigate';
import { ROUTES } from '@/utils/constants';
import { convertPathToTitleTag } from '@/utils/convertPathToTitleTag';
import cookie from '@/utils/cookie';

export const AppRoutes = () => {
  const navigate = useNavigate();
  const { to, setDefaultNavigate } = useNavigateStore();
  useEffect(() => {
    const metaTitle = 'TOP';
    window.scrollTo(0, 0);
    document.title = metaTitle;
    useNotification.getState().dismissAllNotification();

    if (location.pathname === '/logout') {
      navigate(ROUTES.AUTH.LOGIN);
      cookie.clearToken();
    }

    if (location.pathname !== '/') {
      document.title = convertPathToTitleTag(location.pathname);
    } else {
      document.title = metaTitle;
    }
  }, [navigate]);

  const user = useUser();

  if (user.data) {
    const routeProtectedArr: any = protectedRoutes[0]['children'];

    protectedRoutes[0]['children'] = routeProtectedArr;
  }

  useEffect(() => {
    if (to !== '') {
      navigate(to);
      setDefaultNavigate();
    }
  }, [navigate, setDefaultNavigate, to]);

  const routes = user.data ? protectedRoutes : privateRoutes;

  const element = useRoutes([...routes, ...publicRoutes]);

  return <>{element}</>;
};
