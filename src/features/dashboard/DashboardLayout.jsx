import styled from 'styled-components';
import Stats from './Stats';

import useRecentBooking from './useRecentBooking';
import useRecentStays from './useRecentStays';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';
import TodayActivity from '../check-in-out/TodayActivity';

const StyledDashboardLayout = styled.div`
  display: grid;
  gap: 2.4rem;
  /* overflow: hidden; */

  @media (max-width: 768px) {
    padding-right: 0.5rem;
  }
`;

const StyleActivity = styled.div`
  display: grid;
  height: 34rem;

  gap: 2.4rem;
  grid-template-columns: 2fr 1.5fr;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

function DashboardLayout() {
  const { data: bookings } = useRecentBooking();
  const { confirmedStays } = useRecentStays();

  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings.data} confirmedStays={confirmedStays} />
      <StyleActivity>
        <TodayActivity />
        <DurationChart confirmedStays={confirmedStays} />
      </StyleActivity>
      <SalesChart />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
