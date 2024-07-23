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

export type ResponseDataWithMetaData<T> = {
  data: T[];
  statusCode: number;
  success: string;
  metaData: {
    limit: number;
    page: number;
    total: number;
  };
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

export type PaginationParams = {
  limit: number;
  page: number;
};
