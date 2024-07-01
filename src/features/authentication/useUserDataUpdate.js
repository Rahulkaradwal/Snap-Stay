import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserData } from '../../services/apiUser';
import toast from 'react-hot-toast';

function useUserDataUpdate() {
  const queryClient = useQueryClient();
  const { mutate: userUpdate, isLoading } = useMutation({
    mutationFn: (userData) => updateUserData(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['currentUser'],
      });
      toast.success('User Updated !!');
    },
  });
  return { userUpdate, isLoading };
}

export default useUserDataUpdate;
