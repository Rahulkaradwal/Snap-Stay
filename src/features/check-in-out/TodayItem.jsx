import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../ui/Button';
import Tag from '../../ui/Tag';
import CheckoutButton from './CheckoutButton';
import useCheckin from '../bookings/useCheckin';

const StyledTodayItem = styled.li`
  display: grid;
  /* grid-template-columns: 9rem 2rem 1fr 7rem 9rem; */
  grid-template-columns: 9rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { checkIn, isLoading: isCheckingIn } = useCheckin();
  const { _id: id, status, guest, numNights = 0 } = activity;
  return (
    <StyledTodayItem>
      {status === 'unconfirmed' && <Tag type="green">Arriving</Tag>}
      {status === 'checked-in' && <Tag type="blue">Departing</Tag>}
      <Guest>{guest.fullName ? guest.fullName : 'No Name'}</Guest>
      <div>{numNights} nights</div>
      {status === 'unconfirmed' && (
        <Button
          $variation="primary"
          $size="small"
          as={Link}
          onClick={() => checkIn({ id })}
        >
          Check in
        </Button>
      )}

      {status === 'checked-in' && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
