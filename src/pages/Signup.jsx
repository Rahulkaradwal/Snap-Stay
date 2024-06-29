import styled from 'styled-components';
import SignupForm from '../features/authentication/SignupForm';

import Logo from '../ui/Logo';
import Row from '../ui/Row';
import Heading from '../ui/Heading';

const SignupLayout = styled.main`
  min-height: 100vh;
  padding: 2rem 40rem;

  /* display: grid; */

  display: flex;
  flex-direction: column;
  /* grid-template-columns: 50rem; */
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Signup() {
  return (
    <SignupLayout>
      <Logo />
      <h2> Create an Account</h2>
      <SignupForm />
    </SignupLayout>
  );
}

export default Signup;
