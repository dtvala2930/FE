type CookieName = string;
type PropertyName = 'url' | 'sessionExpires';
type NewValue = string;

export const storagePrefix = 'interview_';

export const getCookie = (name: string): string | null => {
  const cname = name + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cname) == 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return null;
};

export const setCookie = (
  name: string,
  value: string,
  expires: string,
): void => {
  const date = new Date(expires);
  const expiresDateString = date.getTime();

  document.cookie = `${name}=${value};expires=${expiresDateString};path=/`;
};

export const removeCookie = (name: string): void => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

const cookie = {
  getToken: () => {
    return getCookie(`${storagePrefix}token`) as string;
  },
  setToken: (token: string, expires: string) => {
    setCookie(`${storagePrefix}token`, token, expires);
    setCookie(`${storagePrefix}token_expire_datetime`, expires, expires);
  },
  clearToken: () => {
    removeCookie(`${storagePrefix}token`);
    removeCookie(`${storagePrefix}token_expire_datetime`);
  },
  getRemainingExpireTime: () => {
    const expireTime = getCookie(`${storagePrefix}token_expire_datetime`);
    const currentTimestamp = new Date().getTime();
    if (expireTime) {
      return Math.max(Date.parse(expireTime) - currentTimestamp, 0);
    }
    return 0;
  },
};

export default cookie;
