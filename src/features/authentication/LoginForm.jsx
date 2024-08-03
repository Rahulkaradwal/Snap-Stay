import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import SpinnerMini from '../../ui/SpinnerMini';
import FormRowVertical from '../../ui/FormRowVertical';
import useLogin from './useLogin';
import FormRow from '../../ui/FormRow';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { getCurrentTimePlus30Minutes } from '../../utils/getTime';

function LoginForm() {
  const { userLogin, isLoading } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const time = Number(getCurrentTimePlus30Minutes());

  const { loginCtx } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    const userData = { email, password };
    userLogin(userData, {
      onSuccess: (data) => {
        loginCtx(data.token, time);
        navigate('/dashboard');
      },
    });
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
