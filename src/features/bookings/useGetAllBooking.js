import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllBooking } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

function useGetAllBooking() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const sort = searchParams.get('sortBy') || '';
  const filter = searchParams.get('status') || '';
  const page = Number(searchParams.get('page')) || 1;

  const { data = { totalResult: 0, bookings: [] }, isLoading } = useQuery({
    queryKey: ['bookings', sort, filter, page],
    queryFn: () => getAllBooking(sort, filter, page),
    keepPreviousData: true, // Keep previous data during loading
  });

  const totalResults = data.totalResult || 0;
  const pageCount = Math.ceil(totalResults / 10); //10 results per page

  // Prefetch the next page if there is one
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', sort, filter, page + 1],
      queryFn: () => getAllBooking(sort, filter, page + 1),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', sort, filter, page - 1],
      queryFn: () => getAllBooking(sort, filter, page - 1),
    });
  }

  return { data, isLoading };
}

export default useGetAllBooking;
