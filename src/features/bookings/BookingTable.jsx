import styled from 'styled-components';
import BookingRow from './BookingRow';
import Spinner from '../../ui/Spinner';

import Pagination from '../../ui/Pagination';
import useGetAllBooking from './useGetAllBooking';

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;

  @media (max-width: 780px) {
    /* padding-right: 0.5rem; */
    margin-right: 0.3rem;
  }
`;

const TableHeader = styled.header`
  display: grid;
  /* 0.8fr 1.2fr 1.8fr 1.4fr 7rem */
  grid-template-columns: 1.4fr 2fr 3fr 1.4fr 1fr 3.2rem;
  column-gap: 2.4rem;
  align-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;

  @media (max-width: 780px) {
    font-size: 0.8rem;
  }
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;
const NoData = styled.div`
  margin: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
`;

function BookingTable() {
  const { data, isLoading } = useGetAllBooking();
  const bookings = data?.data || [];
  const count = data?.totalResult || 0;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Table>
        <TableHeader role="row">
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </TableHeader>
        <>
          {bookings.length === 0 ? (
            <NoData>Sorry! No Bookings Found</NoData>
          ) : (
            bookings.map((booking) => (
              <BookingRow key={booking._id} booking={booking} />
            ))
          )}
          <Footer>
            <Pagination count={count} />
          </Footer>
        </>
      </Table>
    </>
  );
}

export default BookingTable;
