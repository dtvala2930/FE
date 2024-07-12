import { useNavigate } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm';

import { ROUTES } from '@/utils/constants';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <LoginForm onSuccess={() => navigate(`/${ROUTES.DASHBOARD}`)} />
    </Layout>
  );
};
