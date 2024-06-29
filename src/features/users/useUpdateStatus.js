import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserStatus } from '../../services/apiUser';
import toast from 'react-hot-toast';

function useUpdateStatus() {
  const queryClient = useQueryClient();

  const { mutate: updateStatus, isLoading } = useMutation({
    mutationFn: ({ data, id }) => updateUserStatus(data, id),
    onSuccess: () => {
      toast.success('User Updated !!');
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
    onError: () => {
      toast.error('Sorry! Could not update the user');
    },
  });
  return { updateStatus, isLoading };
}

export default useUpdateStatus;
