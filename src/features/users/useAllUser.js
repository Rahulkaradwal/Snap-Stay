import { useQuery } from '@tanstack/react-query';

import { getAllUsers } from '../../services/apiUser';

function useAllUser() {
  const { data = {}, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => getAllUsers(),
  });
  return { data, isLoading };
}
export default useAllUser;
