import { useMutation } from '@tanstack/react-query';
import { login } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function useLogin() {
  const navigate = useNavigate();
  const { mutate: userLogin, isLoading } = useMutation({
    mutationFn: (userData) => login(userData),
    onSuccess: () => {
      navigate('/dashboard');
    },
    onError: (err) => {
      toast.error(err.message || 'Login failed');
    },
  });
  return { userLogin, isLoading };
}

export default useLogin;
