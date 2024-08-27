import styled from 'styled-components';
import { format, isToday } from 'date-fns';
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from 'react-icons/hi2';

import DataItem from '../../ui/DataItem';
import { Flag } from '../../ui/Flag';

import { formatDistanceFromNow, formatCurrency } from '../../utils/helpers';
import { useEffect, useState } from 'react';

const StyledBookingDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: 'Sono';
    font-size: 2rem;
    margin-left: 4px;
  }

  @media (max-width: 780px) {
    font-size: 1.4rem;
    padding: 2.2rem 1rem;
    justify-content: space-between;
    gap: 2rem;

    & p,
    span {
      font-size: 1rem;
    }
    svg {
      height: 3.5rem;
      width: 3.5rem;
      /* margin-right: -0.87rem; */
    }
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;

  @media (max-width: 780px) {
    overflow: hidden;
    padding: 2rem;
  }
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }

  @media (max-width: 780px) {
    width: 100%;

    justify-content: space-between;
    font-size: 1rem;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.$isPaid ? 'var(--color-green-100)' : 'var(--color-yellow-100)'};
  color: ${(props) =>
    props.$isPaid ? 'var(--color-green-700)' : 'var(--color-yellow-700)'};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }

  @media (max-width: 780px) {
    svg {
      height: 1.4rem;
      width: 1.4rem;
    }
    & p:last-child {
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;

  @media (max-width: 780px) {
    font-size: 0.9rem;
  }
`;
const Email = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: 'Sono';

  @media (max-width: 780px) {
    font-size: 0.9rem;
    width: 7rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
`;

// Helper function to get a random country code
const getRandomCountryCode = () => {
  const countryCodes = [
    'IN',
    'US',
    'GB',
    'FR',
    'DE',
    'JP',
    'CN',
    'BR',
    'RU',
    'ZA',
  ];
  const randomIndex = Math.floor(Math.random() * countryCodes.length);
  return countryCodes[randomIndex];
};

// A purely presentational component
function BookingDataBox({ booking }) {
  const {
    createdAt,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guest,
    cabin: { name: cabinName, bookingSettings },
  } = booking;

  const [breakfastPrice, setBreakfastPrice] = useState(0);
  const [randomCountryCode, setRandomCountryCode] = useState(
    getRandomCountryCode()
  );

  useEffect(() => {
    if (bookingSettings) {
      setBreakfastPrice(bookingSettings.breakfastPrice || 0);
    }
  }, [bookingSettings]);

  const extrasPrice = totalPrice + (hasBreakfast ? breakfastPrice : 0);

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
        </p>
      </Header>

      <Section>
        <Guest>
          <Flag
            src={`https://flagsapi.com/${randomCountryCode}/flat/64.png`}
            alt={`Flag of ${randomCountryCode}`}
          />
          <p>
            {`${guest.firstName} ${guest.lastName}`}{' '}
            {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
          </p>
          <span>&bull;</span>
          <Email>{guest.email}</Email>
          <span>&bull;</span>
          <p>Contact No. {guest.phoneNumber}</p>
        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakfast ? 'Yes' : 'No'}
        </DataItem>

        <Price $isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label="Total price">
            {formatCurrency(extrasPrice)}
            {hasBreakfast &&
              ` (${formatCurrency(totalPrice)} cabin + ${formatCurrency(
                breakfastPrice
              )} breakfast)`}
          </DataItem>

          <p>{isPaid ? 'Paid' : 'Will pay at property'}</p>
        </Price>
      </Section>

      <Footer>
        <p>Booked {format(new Date(createdAt), 'EEE, MMM dd yyyy, p')}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
