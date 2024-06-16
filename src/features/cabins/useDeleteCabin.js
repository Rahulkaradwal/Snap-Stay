import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: async (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success('Cabin Deleted Successfully!');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: () => {
      toast.error('Could not delete!');
    },
  });
  return { isDeleting, deleteCabin };
}
