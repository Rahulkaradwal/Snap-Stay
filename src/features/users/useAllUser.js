import { useQuery } from '@tanstack/react-query';

import { getAllUsers } from '../../services/apiUser';
import { useSearchParams } from 'react-router-dom';

function useAllUser() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const { data = {}, isLoading } = useQuery({
    queryKey: ['user', search],
    queryFn: () => getAllUsers(search),
  });
  return { data, isLoading };
}
export default useAllUser;
