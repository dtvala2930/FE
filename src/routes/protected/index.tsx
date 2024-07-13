import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import './style.scss';
import { Spinner } from '@/components/Elemements';
import { MainLayout } from '@/components/Layout';
import { ROUTES } from '@/utils/constants';
import { lazyImport } from '@/utils/lazyImport';

const { DashBoard } = lazyImport(() => import('@/features/misc'), 'DashBoard');
const { SearchList } = lazyImport(
  () => import('@/features/search'),
  'SearchList',
);

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: '',
    element: <App />,
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <DashBoard />,
      },
      {
        path: ROUTES.SEARCH.INDEX,
        element: <SearchList />,
      },
    ],
  },
];
