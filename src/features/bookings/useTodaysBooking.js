import { useQuery } from '@tanstack/react-query';
import { getTodaysBooking } from '../../services/apiBookings';

function useTodayBooking() {
  const { data = {}, isLoading } = useQuery({
    queryKey: ['todayBooking'],
    queryFn: () => getTodaysBooking(),
  });
  return { data, isLoading };
}
export default useTodayBooking;
