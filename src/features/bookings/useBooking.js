import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../services/apiBookings';
import { useParams } from 'react-router-dom';

function useBooking() {
  const { bookingId } = useParams();
  const { data = {}, isLoading } = useQuery({
    queryKey: ['bookingId', bookingId],
    queryFn: () => getBooking(bookingId),
  });
  console.log(data);
  return { data, isLoading };
}
export default useBooking;
