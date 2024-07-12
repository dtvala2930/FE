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
    RESET_PASSWORD_EX: 'reset-password',
    FORGET_PASSWORD_EX: 'forget-password',
  },
  CUSTOMERS: {
    INDEX: 'customers',
    EDIT: 'edit/:id',
    DETAIL: 'customers/:id',
    NEW: 'new',
  },
  CUSTOMERS_ACCOUNT: {
    INDEX: 'customers/account',
    NEW: 'new',
    EDIT: 'edit/:id',
    DETAIL: ':id',
  },

  MASTER_LINKAGE: 'master-linkage',

  COMPANY_SETTING: 'company-setting',

  INTERNAL_SERVER_ERROR: 'internal-server-error',

  PROPERTY_GROUPS: {
    INDEX: 'property-groups',
    NEW: 'new',
    EDIT: 'edit',
  },

  AUTHORITY_GROUPS: {
    INDEX: 'authority-groups',
    NEW: 'new',
    EDIT: 'edit',
  },

  TASKS: {
    INDEX: 'tasks',
    CALENDAR: 'calendar',
    DETAIL: 'tasks/:id',
  },

  SCHEDULES: 'assignments',

  CONTACTS: {
    INDEX: 'contacts',
    NEW: 'new',
    DETAIL: ':id',
  },

  DASHBOARD_EX: 'dashboard_ex',

  NOTIFICATION_LIST_EX: 'notifications_ex',

  CHANGE_PASSWORD_EX: 'change-pass-ex',

  NOTIFICATION: {
    INDEX: 'notifications',
    NEW: 'new',
    DETAIL: 'detail',
  },

  CONTACTS_EX: {
    INDEX: 'contacts_ex',
    NEW: 'new_ex',
    DETAIL: ':id',
  },

  CUSTOMERS_EX: {
    INDEX: 'customers_ex',
    ACCOUNT_LIST: 'account_list',
    DETAIL: 'account_new',
  },

  XYPASS_GROUP_COMPANY: {
    INDEX: 'xymax-group-company',
    EDIT: 'edit/:id',
  },

  INTERNAL_ACCOUNT: {
    INDEX: 'internal-account',
    EDIT: 'edit/:id',
  },

  TERM_OF_USE: {
    INDEX: 'terms-of-use',
  },

  PRIVACY_POLICY: {
    INDEX: 'privacy-policy',
  },
};

export const SIDEBAR = {
  DASHBOARD: {
    LABEL: 'Dashboard',
    TO: `/${ROUTES.DASHBOARD}`,
  },
};

export const PAGE_SIZE = 100;
export const HTTP_STATUS_CODE = {
  CREATED: 201,
};
export const UPLOAD_FILE_SIZE_LIMIT = 10 * 1024 * 1024;
export const LIMIT_OPTIONS = 50;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
