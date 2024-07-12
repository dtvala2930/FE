import { UserResponse } from '../types';

import { axios } from '@/libs/axios';

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  username: string;
};

export const registerWithEmailAndPassword = (
  data: RegisterCredentialsDTO,
): Promise<UserResponse> => {
  return axios.post('/auth/register', data);
};
