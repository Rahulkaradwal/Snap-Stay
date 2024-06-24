import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../ui/Button';
import Tag from '../../ui/Tag';
import CheckoutButton from './CheckoutButton';

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
  const { _id: id, status, guest, numNights = 0 } = activity;

  // {
  //     "_id": "66735e2534e313f56df2079a",
  //     "startDate": "2023-06-22T04:00:00.000Z",
  //     "endDate": "2023-06-28T04:00:00.000Z",
  //     "numGuests": 2,
  //     "status": "checked-in",
  //     "hasBreakfast": false,
  //     "isPaid": false,
  //     "observations": "",
  //     "cabin": {
  //         "_id": "666dba91d5d84fedd7553153",
  //         "name": "006"
  //     },
  //     "guest": {
  //         "_id": "666a1ecd4df7018934ab873b",
  //         "fullName": "karadwal",
  //         "email": "karadwal@gmail.com",
  //         "nationality": "India",
  //         "nationalID": "1234578901"
  //     },
  //     "createdAt": "2024-06-19T22:39:32.493Z",
  //     "__v": 0
  // }

  return (
    <StyledTodayItem>
      {status === 'unconfirmed' && <Tag type="green">Arriving</Tag>}
      {status === 'checked-in' && <Tag type="blue">Departing</Tag>}
      <Guest>{guest.fullName ? guest.fullName : 'No Name'}</Guest>
      <div>{numNights} nights</div>
      {status === 'unconfirmed' && (
        <Button
          type="small"
          $variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        ></Button>
      )}
      {status === 'checked-in' && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
