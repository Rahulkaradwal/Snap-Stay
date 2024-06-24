import styled from 'styled-components';
import Stats from './Stats';

import useRecentBooking from './useRecentBooking';
import useRecentStays from './useRecentStays';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { data: bookings, isLoading: isBookingLoading } = useRecentBooking();
  const {
    data: stays,
    confirmedStays,
    isloading: isStayLoading,
  } = useRecentStays();

  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings.data} confirmedStays={confirmedStays} />
      <div>Today&apos;s activity</div>
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
