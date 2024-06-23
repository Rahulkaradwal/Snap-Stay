import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';
import toast from 'react-hot-toast';

function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: async (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success('Booking Deleted Successfully');
      queryClient.invalidateQueries({
        queryKey: ['bookings'],
        // refetchType: 'none',
      });
    },
    onError: () => {
      toast.error('Could not delete!');
    },
  });
  return { deleteBooking, isDeleting };
}
export default useDeleteBooking;
