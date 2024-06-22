import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBookingStatus } from '../../services/apiBookings';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

function useCheckin() {
  const queryKeys = ['bookings', 'bookingId'];
  const queryClient = useQueryClient();
  const { bookingId } = useParams();
  const { mutate: checkIn, isLoading } = useMutation({
    mutationFn: () =>
      updateBookingStatus(bookingId, { status: 'checked-in', isPaid: true }),
    onSuccess: () => {
      toast.success('Checked In');
      queryKeys.forEach((key) => {
        queryClient.invalidateQueries(key);
      });
    },
  });
  return { checkIn, isLoading };
}
export default useCheckin;
