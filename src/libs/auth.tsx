import { configureAuth } from 'react-query-auth';

import {
  loginWithEmailAndPassword,
  getUser,
  registerWithEmailAndPassword,
  UserResponse,
  LoginCredentialsDTO,
  RegisterCredentialsDTO,
  AuthUser,
} from '@/features/auth';
import cookie from '@/utils/cookie';

async function handleUserResponse(data: UserResponse) {
  const {
    data: { token, expires },
  } = data;

  cookie.setToken(token, expires);

  return await getUser();
}

let data: AuthUser | null = null;
async function userFn() {
  if (cookie.getToken()) {
    if (data === null) {
      data = await getUser();
    }
    if (!data) {
      cookie.clearToken();
    }
  }

  return data;
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  cookie.clearToken();
}

const authConfig = {
  userFn,
  loginFn,
  registerFn,
  logoutFn,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);
