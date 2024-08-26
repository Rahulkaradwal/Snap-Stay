import BookingTable from '../features/bookings/BookingTable';
import Row from '../ui/Row';
import BookingTableOperations from '../features/bookings/BookingTableOperations';
import ResponsiveHeader from '../ui/ResponsiveHeader';

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <ResponsiveHeader>All bookings</ResponsiveHeader>
        <BookingTableOperations />
      </Row>
      <Row>
        <BookingTable />
      </Row>
    </>
  );
}

export default Bookings;
