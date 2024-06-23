import { useQuery } from '@tanstack/react-query';
import { getRecentBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { subDays } from 'date-fns';

function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));

  const queryDate = subDays(new Date(), numDays).toISOString();

  // maybe need to make another route for stays in backend and change here too
  const { data = {}, isLoading } = useQuery({
    queryFn: () => getRecentBookings(queryDate),
    queryKey: ['stays', `last-${numDays}`],
  });

  const confirmedStays = data.data?.filter(
    (stay) => stay.status === 'checked-in' || stay.status === 'checked-out'
  );
  return { data, isLoading, confirmedStays };
}
export default useRecentStays;
