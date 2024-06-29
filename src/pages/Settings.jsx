import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Spinner from '../ui/Spinner';
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm';
import useSettings from '../features/settings/useSettings';
import styled from 'styled-components';

const StyledDiv = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3.2rem;

  padding-top: 2.4rem;
`;

function Settings() {
  const { data, isLoading } = useSettings();
  const settings = data.data;

  if (isLoading) return <Spinner />;

  return (
    <StyledDiv>
      <Heading as="h1">Update hotel settings</Heading>
      <Row>
        <UpdateSettingsForm setting={settings[0]} />
      </Row>
    </StyledDiv>
  );
}

export default Settings;
