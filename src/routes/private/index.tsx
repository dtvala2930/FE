import { Navigate } from 'react-router-dom';

import { ROUTES } from '@/utils/constants';
import { lazyImport } from '@/utils/lazyImport';

import './style.scss';

const { Login } = lazyImport(
  () => import('@/features/auth/routes/Login'),
  'Login',
);

export const privateRoutes = [
  {
    path: `/${ROUTES.AUTH.LOGIN}`,
    element: <Login />,
  },
  { path: '*', element: <Navigate to={`/${ROUTES.AUTH.LOGOUT}`} /> },
];
