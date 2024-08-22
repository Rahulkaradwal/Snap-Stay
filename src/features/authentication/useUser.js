import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiUser';

function useUser() {
  const { data = {}, isPending: isLoading } = useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
  });
  return { data, isLoading };
}

export default useUser;
