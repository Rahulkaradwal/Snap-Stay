import { useParams, useSearchParams } from 'react-router-dom';
import useGetAllBooking from '../features/bookings/useGetAllBooking';
import DashboardFilter from '../features/dashboard/DashboardFilter';
import DashboardLayout from '../features/dashboard/DashboardLayout';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import useRecentBooking from '../features/dashboard/useRecentBooking';

function Dashboard() {
  const { data } = useRecentBooking();
  console.log(data);

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
