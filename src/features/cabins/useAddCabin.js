import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useAddCabin() {
  const queryClient = useQueryClient();

  const { mutate: addCabin, isPending: isAdding } = useMutation({
    mutationFn: (formData) => createEditCabin(formData),
    onSuccess: () => {
      toast.success('Cabin added successfully!');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: () => {
      toast.error('Sorry! Could not add Cabin');
    },
  });

  return { addCabin, isAdding };
}
