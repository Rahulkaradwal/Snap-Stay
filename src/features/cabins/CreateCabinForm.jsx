import { useForm } from 'react-hook-form';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from '../../ui/FormRow';

import { useAddCabin } from './useAddCabin';
import { useUpdateCabin } from './useUpdateCabin';
import useSettings from '../settings/useSettings';
import { useEffect, useState } from 'react';

function CreateCabinForm({ cabin = {}, onCloseModel = () => {} }) {
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

  const [settingId, setSettingId] = useState('');

  const { data } = useSettings();
  const settings = data?.data;

  useEffect(() => {
    if (settings && settings.length > 0) {
      let setId = settings[0]._id;
      setSettingId(setId);
    }
  }, [settings, setSettingId]);

  const { addCabin, isAdding } = useAddCabin();
  const { updateCabin, isUpdating } = useUpdateCabin();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('bookingSettings', settingId);

    Object.keys(data).forEach((key) => {
      if (key === 'image' && data.image[0]) {
        formData.append(key, data.image[0]);
      } else {
        formData.append(key, data[key]);
      }
    });

    // if (!isEditSession) {
    //   formData.append('bookingSettings', settingId);
    // }

    if (isEditSession) {
      // formData.append('id', editId);

      updateCabin(
        { formData, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModel?.();
          },
        }
      );
    } else {
      addCabin(formData, {
        onSuccess: () => {
          reset();
          onCloseModel?.();
        },
      });
    }
  };

  const isCreating = isUpdating || isAdding;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModel ? 'modal' : 'regular'}
    >
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

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: isEditSession ? false : 'This field is required',
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          disabled={isCreating}
          $variation="secondary"
          type="reset"
          onClick={() => onCloseModel?.()}
        >
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
