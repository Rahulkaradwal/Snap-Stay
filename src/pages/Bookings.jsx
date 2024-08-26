import BookingTable from '../features/bookings/BookingTable';
import Row from '../ui/Row';
import BookingTableOperations from '../features/bookings/BookingTableOperations';
import ResponsiveHeader from '../ui/ResponsiveHeader';
import styled from 'styled-components';

const BookingDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  overflow-x: hidden;
`;

function Bookings() {
  return (
    <BookingDiv>
      <Row type="horizontal">
        <ResponsiveHeader>All bookings</ResponsiveHeader>
        <BookingTableOperations />
      </Row>
      <Row>
        <BookingTable />
      </Row>
    </BookingDiv>
  );
}

export default Bookings;
