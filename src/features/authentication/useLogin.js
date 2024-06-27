import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/apiAuth';
import { useAuth } from '../../context/AuthContext';

function useLogin() {
  const navigate = useNavigate();
  const { loginContext } = useAuth();

  const { mutate: userLogin, isLoading } = useMutation({
    mutationFn: (userData) => login(userData),
    onSuccess: (data) => {
      loginContext(data.token);

      navigate('/dashboard');
    },
    onError: (err) => {
      toast.error(err.message || 'Login failed');
    },
  });
  return { userLogin, isLoading };
}

export default useLogin;
