import { useNavigate } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { RegisterForm } from '../components/RegisterForm';

import { ROUTES } from '@/utils/constants';

export const Register = () => {
  const navigate = useNavigate();

  const onSuccess = () => {
    localStorage.setItem('registerSuccess', 'true');
    navigate(`/${ROUTES.AUTH.LOGIN}`);
  };
  return (
    <Layout>
      <RegisterForm onSuccess={onSuccess} />
    </Layout>
  );
};
