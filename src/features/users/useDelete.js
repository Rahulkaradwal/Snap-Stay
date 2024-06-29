import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteUser as deleteUserApi } from '../../services/apiUser';
function useDelete() {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isLoading } = useMutation({
    mutationFn: async (id) => deleteUserApi(id),
    onSuccess: () => {
      toast.success('User Deleted Successfully!');
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
    onError: () => {
      toast.error('Sorry! Could not delete the user');
    },
  });
  return { deleteUser, isLoading };
}

export default useDelete;
