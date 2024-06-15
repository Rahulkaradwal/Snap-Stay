import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Name" error={errors?.name?.message}>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
          {...register('name', {
            required: 'Name is required',
          })}
        />
      </FormRow>

      <FormRow label="Max Capacity" error={errors?.maxCapacity?.message}>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          type="number"
          id="maxCapacity"
          {...register('maxCapacity', {
            required: 'Max Capacity is required',
          })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          {...register('regularPrice', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="discount" error={errors?.discount?.message}>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          {...register('discount')}
          defaultValue={0}
        />
      </FormRow>

      <FormRow label="description" error={errors?.description?.message}>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register('description')}
        />
      </FormRow>

      <FormRow label="image" error={errors?.image?.message}>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button type="submit">Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
