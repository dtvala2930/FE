export type AuthUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

export type UserResponse = {
  data: {
    token: string;
    expires: string;
  };
};

export type UserRolesDataResponse = {
  screen: boolean;
  btnNav?: boolean;
  dateRange?: boolean;
  btnSaveTempt?: boolean;
  btnSaveAndCallOutSideApi?: boolean;
  csvImport?: boolean;
  urlAccess?: string;
  btnBulkReport?: boolean;
  btnUrl?: boolean;
  btnUploadFile?: boolean;
  btnSubmit?: boolean;
  btnLink?: boolean;
  btnToContactNewPage?: boolean;
  btnNew?: boolean;
  btnCustomerAccountNew?: boolean;
  btnProxyLogin?: boolean;
  btnCustomerAccount?: boolean;
};

export type RolesResponse = {
  notifications: UserRolesDataResponse;
  notificationsNew: UserRolesDataResponse;
  notificationsEdit: UserRolesDataResponse;
  contacts: UserRolesDataResponse;
  contactsNew: UserRolesDataResponse;
  contactsEdit: UserRolesDataResponse;
  customers: UserRolesDataResponse;
  customersEdit: UserRolesDataResponse;
  customersAccount: UserRolesDataResponse;
  customersAccountEdit: UserRolesDataResponse;
  xymaxGroupCompany: UserRolesDataResponse;
  xymaxGroupCompanyEdit: UserRolesDataResponse;
  internalAccount: UserRolesDataResponse;
  internalAccountEdit: UserRolesDataResponse;
  masterLinkage: UserRolesDataResponse;
};
