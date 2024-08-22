import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteGuestApi } from '../../services/apiUser';
function useDelete() {
  const queryClient = useQueryClient();

  const { mutate: deleteGuest, isPending: isLoading } = useMutation({
    mutationFn: async (id) => deleteGuestApi(id),
    onSuccess: () => {
      toast.success('Guest Deleted Successfully!');
      queryClient.invalidateQueries({
        queryKey: ['guests'],
      });
    },
    onError: () => {
      toast.error('Sorry! Could not delete the Guest!');
    },
  });
  return { deleteGuest, isLoading };
}

export default useDelete;
