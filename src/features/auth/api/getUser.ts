import { AuthUser } from '../types';

import { axios } from '@/libs/axios';

export const getUser = async (): Promise<AuthUser | null> => {
  let data: AuthUser | null;
  try {
    data = (await axios.get('/auth/profile')).data;
  } catch (error) {
    data = null;
  }
  return data;
};
