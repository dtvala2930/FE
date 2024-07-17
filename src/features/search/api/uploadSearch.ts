import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query';

import { UploadFile } from '../types';

import { useLoading } from '@/hooks/useLoading';
import { useNotification } from '@/hooks/useNotifications';
import { axios } from '@/libs/axios';
import { ErrorResponse, ResponseDetailData } from '@/types';

type FileUploadedOptions = {
  payload: Omit<UploadFile, 'type' | 'fileSize'>;
};

export const updateSearchById = async ({
  payload,
}: FileUploadedOptions): Promise<ResponseDetailData<null>> => {
  const data = JSON.stringify(payload);
  return await axios.post(`/search/upload`, data);
};

type UseUpdateFileUploadedOptions = UseMutationOptions<
  ResponseDetailData<null>,
  Error,
  FileUploadedOptions,
  unknown
>;

export const useUpdateFileUploaded = (
  options?: UseUpdateFileUploadedOptions,
) => {
  const { setLoading } = useLoading();
  const { addNotification } = useNotification();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ payload }: FileUploadedOptions) => {
      return updateSearchById({ payload });
    },
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      addNotification({
        type: 'success',
        message: 'Upload success',
      });
      setLoading(false);
      queryClient.invalidateQueries({ queryKey: ['get-search-list'] });
    },
    onError: (error) => {
      addNotification({
        type: 'error',
        message: error.message,
      });
      setLoading(false);
    },

    ...options,
  });
};
