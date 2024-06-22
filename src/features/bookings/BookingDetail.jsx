import styled from 'styled-components';

import BookingDataBox from './BookingDataBox';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';

import ButtonText from '../../ui/ButtonText';

import { useMoveBack } from '../../hooks/useMoveBack';
import useBooking from './useBooking';
import Spinner from '../../ui/Spinner';
import CheckingBooking from './CheckingBooking';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  // custom hooks
  const moveBack = useMoveBack();

  const { data, isLoading } = useBooking();
  const booking = data.data;

  // conditinal ui
  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  // component returns
  if (isLoading) return <Spinner />;
  if (!booking) return <p>Sorry! No Booking Found</p>;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{booking.cabin.name}</Heading>
          <Tag type={statusToTagName[booking.status]}>
            {booking.status.replace('-', ' ')}
          </Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <CheckingBooking booking={booking} />
    </>
  );
}

export default BookingDetail;
