import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateGuestStatus } from '../../services/apiUser';
import toast from 'react-hot-toast';

function useUpdateStatus() {
  const queryClient = useQueryClient();

  const { mutate: updateStatus, isLoading } = useMutation({
    mutationFn: ({ data, id }) => updateGuestStatus(data, id),
    onSuccess: () => {
      toast.success('Guest Status Updated !!');
      queryClient.invalidateQueries({
        queryKey: ['guests'],
      });
    },
    onError: () => {
      toast.error('Sorry! Could not update the user');
    },
  });
  return { updateStatus, isLoading };
}

export default useUpdateStatus;
