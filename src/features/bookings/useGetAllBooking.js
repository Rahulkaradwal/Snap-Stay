import { useQuery } from '@tanstack/react-query';
import { getAllBooking } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

function useGetAllBooking() {
  const [searchParams] = useSearchParams();

  const sortVal = searchParams.get('sortBy') || '';
  const filterVal = searchParams.get('status') || '';
  const pageVal = searchParams.get('page') || '';
  const { data, isLoading } = useQuery({
    queryKey: ['bookings', sortVal, filterVal, pageVal],
    queryFn: () => getAllBooking(sortVal, filterVal, pageVal),
  });

  return { data, isLoading };
}

export default useGetAllBooking;
