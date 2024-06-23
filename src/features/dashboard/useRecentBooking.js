import { useQuery } from '@tanstack/react-query';
import { getRecentBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { subDays } from 'date-fns';

function useRecentBooking() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data = {}, isLoading } = useQuery({
    queryFn: () => getRecentBookings(queryDate),
    queryKey: ['bookings', `last-${numDays}`],
  });
  return { data, isLoading };
}
export default useRecentBooking;
