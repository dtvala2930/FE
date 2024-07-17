import { useQuery } from '@tanstack/react-query';

import { SearchDetailItem, SearchItem } from '../types';

import { useLoading } from '@/hooks/useLoading';
import { axios } from '@/libs/axios';
import { ResponseDetailData } from '@/types';

export type QueryParameters = {
  fileId: string;
};

export const getSearchDetail = async (
  params: QueryParameters,
): Promise<ResponseDetailData<SearchDetailItem>> => {
  return await axios.get(`/search/${params?.fileId}`);
};

type UseGetSearchDetailOptions = {
  queryParameters: QueryParameters;
};

export const useGetSearchDetail = ({
  queryParameters,
}: UseGetSearchDetailOptions) => {
  const { setLoading } = useLoading();
  return useQuery<ResponseDetailData<SearchDetailItem>>({
    queryKey: ['get-search-detail'],
    queryFn: async () => {
      setLoading(true);
      const data = await getSearchDetail({ ...queryParameters });
      setLoading(false);
      return data;
    },
  });
};
