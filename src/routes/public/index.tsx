
import { lazyImport } from '@/utils/lazyImport';
import './style.scss';

const { InternalServerError } = lazyImport(
  () => import('@/features/misc/routes/InternalServerError'),
  'InternalServerError',
);
const { NotFound } = lazyImport(
  () => import('@/features/misc/routes/NotFound'),
  'NotFound',
);

export const publicRoutes = [
  {
    path: '/internal-server-error',
    element: <InternalServerError />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];
