type CookieName = string;
type PropertyName = 'url' | 'sessionExpires';
type NewValue = string;

export const storagePrefix = 'xypass_app_';

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

export const setCookieForSessionExpires = (
  cookieName: CookieName,
  propertyName: PropertyName,
  newValue: NewValue,
): void => {
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(cookieName + '='));

  if (!cookieValue) {
    console.error('Cookie not found');
    return;
  }

  const jsonString = decodeURIComponent(cookieValue.split('=')[1]);
  const cookieObject: { [key in PropertyName]: NewValue } =
    JSON.parse(jsonString);

  cookieObject[propertyName] = newValue;
  const updatedJsonString = JSON.stringify(cookieObject);
  document.cookie =
    cookieName + '=' + encodeURIComponent(updatedJsonString) + '; path=/';
};

export const setCookie = (
  name: string,
  value: string,
  expires: string,
): void => {
  const date = new Date(expires);
  const expiresDateString = date.toUTCString();
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
