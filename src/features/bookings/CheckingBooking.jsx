import styled from 'styled-components';
import Button from '../../ui/Button';
import useCheckin from './useCheckin';
import ButtonGroup from '../../ui/ButtonGroup';
import { useMoveBack } from '../../hooks/useMoveBack';
import Checkbox from '../../ui/Checkbox';
import { useEffect, useState } from 'react';
import useCheckOut from './useCheckOut';
import useDeleteBooking from './useDeleteBooking';
import { useNavigate } from 'react-router-dom';

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckingBooking({ booking }) {
  // hooks
  const navigate = useNavigate();

  //custom hooks
  const moveBack = useMoveBack();
  const { checkIn } = useCheckin();
  const { checkOut, isCheckingOut } = useCheckOut();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const [confirmPaid, setConfirmPaid] = useState(false);

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  // hadle checkin
  const handleCheckIn = () => {
    checkIn();
  };

  const handleCheckOut = () => {
    checkOut();
  };

  const handleDeleteBooking = () => {
    deleteBooking();
    navigate('/bookings');
  };

  return (
    <>
      {booking.status !== 'checked-in' && (
        <>
          {booking.status !== 'checked-out' && (
            <Box>
              <Checkbox
                checked={confirmPaid}
                disabled={confirmPaid}
                onChange={() => setConfirmPaid((confirm) => !confirm)}
                id="confirm"
              >
                I confirm that {booking.guest.fullName} has paid the total
                amount
              </Checkbox>
            </Box>
          )}
          <ButtonGroup>
            {booking.status === 'checked-out' ? (
              <Button $variation="danger" onClick={handleDeleteBooking}>
                Delete Booking
              </Button>
            ) : (
              <Button
                onClick={handleCheckIn}
                disabled={!confirmPaid || booking.status === 'checked-in'}
              >
                {`Check in booking #${booking.cabin.name}`}
              </Button>
            )}
            <Button $variation="secondary" onClick={moveBack}>
              Back
            </Button>
          </ButtonGroup>
        </>
      )}
      {booking.status === 'checked-in' && (
        <ButtonGroup>
          <Button
            $variation="primary"
            onClick={handleCheckOut}
            disabled={isCheckingOut}
          >
            {`Check-Out booking #${booking.cabin.name}`}
          </Button>
          <Button $variation="secondary" onClick={moveBack}>
            Back
          </Button>
        </ButtonGroup>
      )}
    </>
  );
}

export default CheckingBooking;
