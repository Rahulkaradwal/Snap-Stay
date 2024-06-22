import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBookingStatus } from '../../services/apiBookings';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

function useCheckOut() {
  const queryKeys = ['bookings', 'bookingId'];
  const queryClient = useQueryClient();
  const { bookingId } = useParams();
  const { mutate: checkOut, isLoading: isCheckingOut } = useMutation({
    mutationFn: () =>
      updateBookingStatus(bookingId, { status: 'checked-out', isPaid: true }),
    onSuccess: () => {
      toast.success('Checked Out');
      queryKeys.forEach((key) => {
        queryClient.invalidateQueries(key);
      });
    },
  });
  return { checkOut, isCheckingOut };
}
export default useCheckOut;
