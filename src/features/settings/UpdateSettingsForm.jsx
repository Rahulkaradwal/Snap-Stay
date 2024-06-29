import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useUpdateSettings from './useUpdateSettings';

function UpdateSettingsForm({ setting }) {
  const {
    minBookingLength,
    maxBookingLength,
    maxGuestPerBooking,
    breakfastPrice,
    _id: settingId,
  } = setting;

  const { updateSettings, isLoading } = useUpdateSettings();

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;

    updateSettings({ data: { [field]: value }, id: settingId });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          disabled={isLoading}
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, 'minBookingLength')}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          disabled={isLoading}
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, 'maxBookingLength')}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          disabled={isLoading}
          type="number"
          id="max-guests"
          defaultValue={maxGuestPerBooking}
          onBlur={(e) => handleUpdate(e, 'maxGuestPerBooking')}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          disabled={isLoading}
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, 'breakfastPrice')}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
