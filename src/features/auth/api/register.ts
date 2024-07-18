import { RegisterResponse, UserResponse } from '../types';

import { axios } from '@/libs/axios';

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const register = async (
  data: RegisterCredentialsDTO,
): Promise<RegisterResponse> => {
  return axios.post('/auth/register', data);
};
