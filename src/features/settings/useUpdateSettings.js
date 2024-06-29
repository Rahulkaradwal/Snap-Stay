import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSettingsApi } from '../../services/apiSettings';
import toast from 'react-hot-toast';

function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSettings, isLoading } = useMutation({
    mutationFn: ({ data, id }) => updateSettingsApi(data, id),
    onSuccess: () => {
      toast.success('Settings updated successfull!');
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
    onError: () => {
      toast.error('Sorry! Could not update the settings');
    },
  });
  return { updateSettings, isLoading };
}

export default useUpdateSettings;
