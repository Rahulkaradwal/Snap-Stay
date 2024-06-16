import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabin, isLoading: isUpdating } = useMutation({
    mutationFn: ({ data, id }) => createEditCabin(data, id),
    onSuccess: () => {
      toast.success('Cabin updated successfully!');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: () => {
      toast.error('Sorry! Could not update Cabin');
    },
  });
  return { updateCabin, isUpdating };
}
