import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBookingStatus } from '../../services/apiBookings';
import toast from 'react-hot-toast';

function useCheckOut() {
  const queryKeys = ['bookings', 'bookingId'];
  const queryClient = useQueryClient();
  const params = useParams();
  const bookingIdFromParams = params.bookingId;

  const { mutate: checkOut, isLoading: isCheckingOut } = useMutation({
    mutationFn: (booking) => {
      const idToUse = booking?.id || bookingIdFromParams;
      if (!idToUse) throw new Error('Booking ID is required');

      return updateBookingStatus(idToUse, {
        status: 'checked-out',
        isPaid: true,
      });
    },
    onSuccess: () => {
      toast.success('Checked Out');
      queryKeys.forEach((key) => {
        queryClient.invalidateQueries(key);
      });
    },
    onError: (error) => {
      toast.error(error.message || 'Error checking out');
    },
  });

  return { checkOut, isCheckingOut };
}

export default useCheckOut;
