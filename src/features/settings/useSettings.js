import { useQuery } from '@tanstack/react-query';
import { getSettings } from '../../services/apiSettings';

function useSettings() {
  const { data = {}, isLoading } = useQuery({
    queryKey: ['settings'],
    queryFn: () => getSettings(),
  });
  return { data, isLoading };
}
export default useSettings;
