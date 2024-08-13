import { useQuery } from '@tanstack/react-query';

import { getAllGuests } from '../../services/apiUser';
import { useSearchParams } from 'react-router-dom';

function useAllGuests() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const { data = {}, isLoading } = useQuery({
    queryKey: ['guests', search],
    queryFn: () => getAllGuests(search),
  });
  return { data, isLoading };
}
export default useAllGuests;
