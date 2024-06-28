import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Spinner from '../ui/Spinner';
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm';
import useSettings from '../features/settings/useSettings';

function Settings() {
  const { data, isLoading } = useSettings();
  const settings = data.data;

  if (isLoading) return <Spinner />;

  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm setting={settings[0]} />
    </Row>
  );
}

export default Settings;
