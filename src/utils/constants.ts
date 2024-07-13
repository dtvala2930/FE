export const ROUTES = {
  MENU1: '',
  MENU2: '',
  MENU3: '',
  MENU4: '',
  MENU5: '',
  MENU6: '',
  DASHBOARD: '',

  AUTH: {
    LOGIN: 'login',
    LOGOUT: 'logout',
  },
  SEARCH: {
    INDEX: 'search',
    EDIT: 'edit/:id',
    DETAIL: 'customers/:id',
    NEW: 'new',
  },
};

export const SIDEBAR = {
  DASHBOARD: {
    LABEL: 'Dashboard',
    TO: `/${ROUTES.DASHBOARD}`,
  },
  SEARCH: {
    LABEL: 'Search',
    TO: `/${ROUTES.SEARCH.INDEX}`,
  },
};

export const PAGE_SIZE = 100;
export const HTTP_STATUS_CODE = {
  CREATED: 201,
};
export const UPLOAD_FILE_SIZE_LIMIT = 10 * 1024 * 1024;
export const LIMIT_OPTIONS = 50;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
