import { useForm } from 'react-hook-form';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from '../../ui/FormRow';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

function CreateCabinForm({ cabin = {} }) {
  const queryClient = useQueryClient();
  const { _id: editId, ...editValues } = cabin;
  const isEditSession = Boolean(editId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { mutate: addCabin, isLoading: isAdding } = useMutation({
    mutationFn: (data) => createEditCabin(data),
    onSuccess: () => {
      toast.success('Cabin added successfully!');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      reset();
    },
    onError: () => {
      toast.error('Sorry! Could not add Cabin');
    },
  });

  const { mutate: updateCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ data, id }) => createEditCabin(data, id),
    onSuccess: () => {
      toast.success('Cabin updated successfully!');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      reset();
    },
    onError: () => {
      toast.error('Sorry! Could not update Cabin');
    },
  });

  const onSubmit = (data) => {
    if (isEditSession) {
      updateCabin({ data, id: editId });
    } else {
      addCabin(data);
    }
  };

  const isCreating = isEditing || isAdding;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          disabled={isCreating}
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
        />
      </FormRow>

      <FormRow label="Max Capacity" error={errors?.maxCapacity?.message}>
        <Input
          disabled={isCreating}
          type="number"
          id="maxCapacity"
          {...register('maxCapacity', { required: 'Max Capacity is required' })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          disabled={isCreating}
          type="number"
          id="regularPrice"
          {...register('regularPrice', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          disabled={isCreating}
          type="number"
          id="discount"
          {...register('discount', { valueAsNumber: true })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          disabled={isCreating}
          id="description"
          defaultValue=""
          {...register('description')}
        />
      </FormRow>

      <FormRow label="Image" error={errors?.image?.message}>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        <Button disabled={isCreating} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating} type="submit">
          {isEditSession ? 'Edit Cabin' : 'Add Cabin'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
