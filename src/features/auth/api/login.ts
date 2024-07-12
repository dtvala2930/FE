import { UserResponse } from '../types';

import { axios } from '@/libs/axios';

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = async (
  data: LoginCredentialsDTO,
): Promise<UserResponse> => {
  return axios.post('/auth/login', data);
};
