import Axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';

import { API_PATH, API_URL } from '@/config';
import { useLoading } from '@/hooks/useLoading';
import { useNotification } from '@/hooks/useNotifications';
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
    console.error(error.response.data.statusCode);

    if (error.response.data.statusCode === 400) {
      const message = error.response.data.message;
      useNotification.getState().addNotification({
        type: 'error',
        message,
      });
    } else if (error.response.data.statusCode === 401) {
      useNotification.getState().addNotification({
        type: 'error',
        message: error.response.data.message,
      });
      cookie.clearToken();
    } else if (
      error.response.data.statusCode === 406 &&
      error.response.data.message === 'access-denied'
    ) {
      useNotification.getState().addNotification({
        type: 'error',
        message: error.response.data.message,
      });
    }

    if (error.response.data.statusCode === 500) {
      useNotification.getState().addNotification({
        type: 'error',
        message: error.response.data.message,
      });
    }

    useLoading.setState({ isLoading: false });

    return Promise.reject(error);
  },
);
