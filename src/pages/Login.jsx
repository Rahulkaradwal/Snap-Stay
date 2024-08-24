import styled from 'styled-components';
import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';
import Heading from '../ui/Heading';

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  padding: 5rem;
  padding-bottom: 10rem;
  grid-template-columns: 1fr;
  align-content: center;
  justify-content: center;
  gap: 2rem;
  background-color: var(--color-grey-50);

  @media (min-width: 768px) {
    padding: 2rem;
    grid-template-columns: 48rem;
    gap: 3.2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
    grid-template-columns: 48rem;
    gap: 3.2rem;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
