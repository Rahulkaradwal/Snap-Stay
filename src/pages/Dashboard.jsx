import { useParams, useSearchParams } from 'react-router-dom';
import useGetAllBooking from '../features/bookings/useGetAllBooking';
import DashboardFilter from '../features/dashboard/DashboardFilter';
import DashboardLayout from '../features/dashboard/DashboardLayout';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import useRecentBooking from '../features/dashboard/useRecentBooking';
import useRecentStays from '../features/dashboard/useRecentStays';

function Dashboard() {
  const { data: bookings } = useRecentBooking();
  const { data: stays, confirmedStays, isloading } = useRecentStays();
  console.log(bookings, stays, confirmedStays);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
