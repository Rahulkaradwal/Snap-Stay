import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePasswordApi } from '../../services/apiUser';
import toast from 'react-hot-toast';

function useUserPasswordUpdate() {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isPending: isLoading } = useMutation({
    mutationFn: (userData) => updatePasswordApi(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['currentUser'],
      });
      toast.success('Password Updated !!');
    },
    onError: () => {
      toast.error('Sorry! Could not update the password!');
    },
  });
  return { updatePassword, isLoading };
}

export default useUserPasswordUpdate;
