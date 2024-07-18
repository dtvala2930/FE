import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm';

import { useNotification } from '@/hooks/useNotifications';
import { ROUTES } from '@/utils/constants';

export const Login = () => {
  const navigate = useNavigate();
  const { addNotification } = useNotification();

  useEffect(() => {
    const isRegisterSuccess = localStorage.getItem('registerSuccess');

    if (isRegisterSuccess) {
      addNotification({
        type: 'success',
        message: 'Register success',
      });

      const timeoutId = setTimeout(() => {
        localStorage.removeItem('registerSuccess');
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [addNotification]);

  return (
    <Layout>
      <LoginForm
        onSuccess={() => {
          localStorage.removeItem('registerSuccess');
          navigate(`/${ROUTES.DASHBOARD}`);
        }}
      />
    </Layout>
  );
};
