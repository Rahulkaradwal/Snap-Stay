import { useMutation, useQueryClient } from '@tanstack/react-query';
import { checkInBooking } from '../../services/apiBookings';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

function useCheckin() {
  const queryClient = useQueryClient();
  const { bookingId } = useParams();
  console.log('in the func');
  const { mutate: checkIn, isLoading } = useMutation({
    mutationFn: () => checkInBooking(bookingId, { status: 'checked-in' }),
    onSuccess: () => {
      toast.success('Checked In');
      queryClient.invalidateQueries({ queryKey: ['bookingId'] });
    },
  });
  return { checkIn, isLoading };
}
export default useCheckin;
