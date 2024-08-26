import Heading from '../ui/Heading';
import Row from '../ui/Row';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm';
import styled from 'styled-components';

const AccountDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 3.2rem;
  overflow-x: hidden;
`;

function Account() {
  return (
    <AccountDiv>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </AccountDiv>
  );
}

export default Account;
