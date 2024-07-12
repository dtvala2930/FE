import Axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';

import { API_PATH, API_URL } from '@/config';
import { useLoading } from '@/hooks/useLoading';
import { useNotification } from '@/hooks/useNotifications';
import { useNavigateStore } from '@/stores/navigate';
import cookie from '@/utils/cookie';

export interface IApiResponse {
  statusCode: number;
  success: string;
  data: [] | null;
}

function authRequestInterceptor(config: AxiosRequestConfig): any {
  const token = cookie.getToken();
  if (token) {
    (config.headers as AxiosHeaders).set('authorization', `Bearer ${token}`);
  }

  return config;
}

console.log('API_URL: ', API_URL);

export const axios = Axios.create({
  baseURL: `${API_URL}${API_PATH}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (
      error.response.data.statusCode === 401 &&
      (error.response.data.message === 'login-unauthorized' ||
        error.response.data.message === 'Unauthorized' ||
        error.response.data.message === 'User not found.')
    ) {
      cookie.clearToken();
      const message = 'Logged in fail';
      useNotification.getState().addNotification({
        type: 'error',
        message,
      });
    } else if (
      error.response.data.statusCode === 406 &&
      error.response.data.message === 'access-denied'
    ) {
      const type = 'error';
      const message = `Access denied`;
      useNotification.getState().addNotification({
        type,
        message,
      });
    }

    if (
      error.response.data.statusCode === 500 &&
      window.location.pathname !== '/'
    ) {
      useNavigateStore.getState().setNavigateTo('/');
    }

    useLoading.setState({ isLoading: false });

    return Promise.reject(error);
  },
);
