import { AuthUser } from '../types';

import { axios } from '@/libs/axios';

export const getUser = async (
  type?: string,
  responseData?: any,
): Promise<AuthUser | null> => {
  let data: AuthUser | null;

  if (type === 'register') {
    return responseData;
  }
  try {
    data = (await axios.get('/auth/profile')).data;
  } catch (error) {
    data = null;
  }
  return data;
};
