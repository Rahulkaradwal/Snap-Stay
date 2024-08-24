import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import toast from 'react-hot-toast';
import useUserPasswordUpdate from './useUserPasswordUpdate';

// import { useUpdateUser } from './useUpdateUser';

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updatePassword, isLoading: isUpdating } = useUserPasswordUpdate();

  // const { updateUser, isUpdating } = useUpdateUser();
  function onSubmit({ oldPassword, password, confirmPassword }) {
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    updatePassword(
      { oldPassword, password, confirmPassword },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Old password " error={errors?.oldPassword?.message}>
        <Input
          type="password"
          id="old-password"
          autoComplete="current-password"
          disabled
          {...register('oldPassword', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          })}
        />
      </FormRow>
      <FormRow label="New Password " error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Confirm password"
        error={errors?.confirmPassword?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled
          {...register('confirmPassword', {
            required: 'This field is required',
            validate: (value) =>
              getValues().password === value || 'Passwords need to match',
          })}
        />
      </FormRow>
      <FormRow>
        <Button disabled onClick={reset} type="submit" $variation="secondary">
          Cancel
        </Button>
        <Button disabled>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
