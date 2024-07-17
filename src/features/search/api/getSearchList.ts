import { useQuery } from '@tanstack/react-query';

import { SearchItem } from '../types';

import { useLoading } from '@/hooks/useLoading';
import { axios } from '@/libs/axios';
import { ResponseData } from '@/types';

export const getSearchList = async (): Promise<ResponseData<SearchItem>> => {
  return await axios.get(`/search`);
};

export const useGetSearchList = () => {
  const { setLoading } = useLoading();
  return useQuery<ResponseData<SearchItem>>({
    queryKey: ['get-search-list'],
    queryFn: async () => {
      setLoading(true);
      const data = await getSearchList();
      setLoading(false);
      return data;
    },
  });
};
