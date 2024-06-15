import { useForm } from 'react-hook-form';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from '../../ui/FormRow';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

function CreateCabinForm() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: addCabin,
    onSuccess: () => {
      toast.success('Cabin added Successfully!');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: () => {
      toast.error('Sorry! Could not add Cabin');
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          disabled={isCreating}
          type="text"
          id="name"
          {...register('name', {
            required: 'Name is required',
          })}
        />
      </FormRow>

      <FormRow label="Max Capacity" error={errors?.maxCapacity?.message}>
        <Input
          disabled={isCreating}
          type="number"
          id="maxCapacity"
          {...register('maxCapacity', {
            required: 'Max Capacity is required',
          })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          disabled={isCreating}
          type="number"
          id="regularPrice"
          {...register('regularPrice', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="discount" error={errors?.discount?.message}>
        <Input
          disabled={isCreating}
          type="number"
          id="discount"
          {...register('discount')}
          defaultValue={0}
        />
      </FormRow>

      <FormRow label="description" error={errors?.description?.message}>
        <Textarea
          disabled={isCreating}
          type="number"
          id="description"
          defaultValue=""
          {...register('description')}
        />
      </FormRow>

      <FormRow label="image" error={errors?.image?.message}>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        <Button disabled={isCreating} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating} type="submit">
          Edit cabin
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
