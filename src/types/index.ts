export type TBaseEntity = {
  id: string;
  createdAt: number;
};

export type TBreadcrumb = { label: string; to?: string }[];

export type ResponseData<T> = {
  data: T[];
  statusCode: number;
  success: string;
};
export type ResponseDetailData<T> = {
  data: T;
  statusCode: number;
  success: string;
};

export type ErrorResponse = {
  data: {
    message: string;
    statusCode: number;
  };
};
export type ScreenDevice = 'large' | 'medium' | 'small' | 'half';
