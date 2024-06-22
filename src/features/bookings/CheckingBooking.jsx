import styled from 'styled-components';
import Button from '../../ui/Button';
import useCheckin from './useCheckin';
import ButtonGroup from '../../ui/ButtonGroup';
import { useMoveBack } from '../../hooks/useMoveBack';
import Checkbox from '../../ui/Checkbox';
import { useEffect, useState } from 'react';

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckingBooking({ booking }) {
  //custom hooks
  const moveBack = useMoveBack();
  const { checkIn, isLoading: isCheckingIn } = useCheckin();

  const [confirmPaid, setConfirmPaid] = useState(false);

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  // hadle checkin
  const handleCheckIn = () => {
    checkIn();
  };
  return (
    <>
      <Box>
        <Checkbox
          checked={confirmPaid}
          disabled={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          id="confirm"
        >
          I confirm that {booking.guest.fullName} has paid the total amount
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button
          onClick={handleCheckIn}
          disabled={!confirmPaid || booking.status === 'checked-in'}
        >
          {booking.status === 'checked-in'
            ? 'Check-out'
            : `Check in booking #${booking.cabin.name}`}
        </Button>
        <Button $variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckingBooking;
