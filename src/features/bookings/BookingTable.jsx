import styled from 'styled-components';
import BookingRow from './BookingRow';
import { useQuery } from '@tanstack/react-query';
import { getAllBooking } from '../../services/apiBookings';
import Spinner from '../../ui/Spinner';
import { useSearchParams } from 'react-router-dom';

import Pagination from '../../ui/Pagination';

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem;
  column-gap: 2.4rem;
  align-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
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

function BookingTable() {
  const [searchParams] = useSearchParams();

  const sortVal = searchParams.get('sortBy') || '';
  const filterVal = searchParams.get('status') || '';
  const pageVal = searchParams.get('page') || '';

  const { data, isLoading } = useQuery({
    queryKey: ['bookings', sortVal, filterVal, pageVal],
    queryFn: () => getAllBooking(sortVal, filterVal, pageVal),
  });

  const bookings = data?.data || [];
  const count = data?.totalResult || 0;

  // const { data: bookings, totalResult: count } = data;

  if (isLoading) return <Spinner />;

  if (bookings.length === 0) {
    return <p>Sorry! No Bookings Found</p>;
  }

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
        {bookings.map((booking) => (
          <BookingRow key={booking._id} booking={booking} />
        ))}
        <Footer>
          <Pagination count={count} />
        </Footer>
      </Table>
    </>
  );
}

export default BookingTable;
