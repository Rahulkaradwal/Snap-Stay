import styled from 'styled-components';
import Row from '../../ui/Row';
import useTodayBooking from '../bookings/useTodaysBooking';
import Spinner from '../../ui/Spinner';
import TodayItem from './TodayItem';
import ResponsiveHeaders from '../../ui/ResponsiveHeaders';

const StyledToday = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-top: 2.4rem;
  height: 34rem;

  @media (min-width: 460px) and (max-width: 768px) {
    width: fit-content;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    height: auto; /* Allow height to adjust dynamically on smaller screens */
  }

  @media (max-width: 460px) {
    width: 98%;
    padding: 1.6rem;
    gap: 1.6rem;
  }
`;

const TodayList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1; /* Allows the list to grow and occupy available space */

  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (max-width: 480px) {
    max-height: 20rem; /* Limit the height on smaller screens to avoid excessive scrolling */
  }
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;

  @media (max-width: 480px) {
    font-size: 1.6rem; /* Slightly smaller font size on small screens */
  }
`;

function TodayActivity() {
  const { data, isLoading } = useTodayBooking();
  const activities = data.data;

  return (
    <StyledToday>
      <Row type="horizontal">
        <ResponsiveHeaders>Today&apos;s activity</ResponsiveHeaders>
      </Row>
      {!isLoading ? (
        activities?.length > 0 ? (
          <TodayList>
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity._id} />
            ))}
          </TodayList>
        ) : (
          <NoActivity>No activity today...</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </StyledToday>
  );
}

export default TodayActivity;
