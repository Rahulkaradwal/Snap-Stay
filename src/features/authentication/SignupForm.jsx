import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useForm } from 'react-hook-form';
import useSignup from './useSignup';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const navigate = useNavigate();
  const { userSignup, isLoading } = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    userSignup(data, {
      onSuccess: () => {
        reset();
      },
    });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register('fullName', { required: 'Name is required' })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register('email', { required: 'Email is required' })}
        />
      </FormRow>

      <FormRow label="Nationality" error={errors?.nationality?.message}>
        <Input
          type="text"
          id="nationality"
          {...register('nationality', { required: 'Nationality is required' })}
        />
      </FormRow>

      <FormRow label="National ID Number" error={errors?.nationalID?.message}>
        <Input
          type="text"
          id="nationalID"
          {...register('nationalID', { required: 'National ID is required' })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          {...register('password', { required: 'Password is required' })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.confirmPassword?.message}>
        <Input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword', { required: 'Password is required' })}
        />
      </FormRow>

      <FormRow>
        <Button $variation="secondary" onClick={() => navigate('/login')}>
          Login
        </Button>
        <Button>Signup</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
