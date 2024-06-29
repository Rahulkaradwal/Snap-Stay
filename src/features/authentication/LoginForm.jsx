import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import SpinnerMini from '../../ui/SpinnerMini';
import FormRowVertical from '../../ui/FormRowVertical';
import useLogin from './useLogin';
import FormRow from '../../ui/FormRow';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const { userLogin, isLoading } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    const userData = { email, password };
    userLogin(userData);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <FormRow>
          <Button $variation="secondary" onClick={() => navigate('/signup')}>
            SignUp
          </Button>
          <Button disabled={isLoading}>
            {isLoading ? <SpinnerMini /> : 'Log in'}
          </Button>
        </FormRow>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
