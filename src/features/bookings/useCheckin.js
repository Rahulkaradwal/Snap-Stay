import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBookingStatus } from '../../services/apiBookings';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

function useCheckin() {
  const queryKeys = ['bookings', 'bookingId'];
  const queryClient = useQueryClient();
  const params = useParams();
  const bookingIdFromParams = params.bookingId;

  const { mutate: checkIn, isLoading } = useMutation({
    mutationFn: (booking) => {
      const idToUse = booking?.id || bookingIdFromParams;
      if (!idToUse) {
        throw new Error('Booking ID is required');
      }

      return updateBookingStatus(idToUse, {
        status: 'checked-in',
        isPaid: true,
      });
    },
    onSuccess: () => {
      toast.success('Checked In');
      queryKeys.forEach((key) => {
        queryClient.invalidateQueries(key);
      });
    },
    onError: (error) => {
      toast.error(error.message || 'Error checking in');
    },
  });

  return { checkIn, isLoading };
}

export default useCheckin;
