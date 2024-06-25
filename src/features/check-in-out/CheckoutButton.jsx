import Button from '../../ui/Button';
import useCheckOut from '../bookings/useCheckOut';

function CheckoutButton({ bookingId }) {
  const { checkOut, isCheckingOut } = useCheckOut();

  return (
    <Button
      $variation="primary"
      disabled={isCheckingOut}
      $size="small"
      onClick={() => checkOut({ id: bookingId })}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
