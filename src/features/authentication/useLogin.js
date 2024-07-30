import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { login } from '../../services/apiAuth';

function useLogin() {
  const { mutate: userLogin, isLoading } = useMutation({
    mutationFn: (userData) => login(userData),

    onError: (err) => {
      toast.error(err.message || 'Login failed');
    },
  });
  return { userLogin, isLoading };
}

export default useLogin;
