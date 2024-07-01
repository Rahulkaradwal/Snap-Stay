import { useEffect, useState } from 'react';

import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useUserDataUpdate from './useUserDataUpdate';
import useUser from './useUser';

function UpdateUserDataForm() {
  const { data, isLoading: isUserLoading } = useUser();
  const [email, setEmail] = useState('');
  const [currentFullName, setCurrentFullName] = useState('');

  useEffect(() => {
    if (!isUserLoading && data) {
      setEmail(data.email);
      setCurrentFullName(data.fullName);
      setFullName(data.fullName);
    }
  }, [data, isUserLoading]);

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  const { userUpdate, isLoading } = useUserDataUpdate();

  function handleSubmit(e) {
    e.preventDefault();
    const userData = { fullName, avatar }; // Include avatar if needed
    userUpdate(userData);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>
      <FormRow>
        <Button type="reset" $variation="secondary">
          Cancel
        </Button>
        <Button type="submit" isLoading={isLoading}>
          Update account
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
