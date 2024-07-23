import { useQuery } from '@tanstack/react-query';

import { SearchDetailResponse } from '../types';

import { useLoading } from '@/hooks/useLoading';
import { axios } from '@/libs/axios';
import { PaginationParams, ResponseDataWithMetaData } from '@/types';
import { formSearchSubmitRequestParamOnlyData } from '@/utils/helper';

export type QueryParameters = {
  fileId: string;
};

export type GetSearchListParams = QueryParameters & PaginationParams;

export const getSearchDetail = async (
  params: GetSearchListParams,
): Promise<ResponseDataWithMetaData<SearchDetailResponse>> => {
  const conditions = formSearchSubmitRequestParamOnlyData(params);
  return await axios.get(`/search/${params?.fileId}${conditions}`);
};

type UseGetSearchDetailOptions = {
  queryParameters: QueryParameters;
  pagination: PaginationParams;
};

export const useGetSearchDetail = ({
  queryParameters,
  pagination,
}: UseGetSearchDetailOptions) => {
  const { setLoading } = useLoading();
  return useQuery<ResponseDataWithMetaData<SearchDetailResponse>>({
    queryKey: ['get-search-detail', pagination],
    queryFn: async () => {
      setLoading(true);
      const data = await getSearchDetail({
        limit: pagination.limit,
        page: pagination.page,
        ...queryParameters,
      });
      setLoading(false);
      return data;
    },
  });
};
