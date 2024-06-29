import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { SignUp } from '../../services/apiAuth';

function useSignup() {
  const navigate = useNavigate();

  const { mutate: userSignup, isLoading } = useMutation({
    mutationFn: (userData) => SignUp(userData),
    onSuccess: () => {
      navigate('/dashboard');
    },
    onError: (err) => {
      toast.error(err.message || 'Signup failed');
    },
  });
  return { userSignup, isLoading };
}

export default useSignup;
