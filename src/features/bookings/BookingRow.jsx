import styled from 'styled-components';
import { format, isToday } from 'date-fns';

import Tag from '../../ui/Tag';
import { GrView } from 'react-icons/gr';

// import Table from "../../ui/Table";

import { formatCurrency } from '../../utils/helpers';
import { formatDistanceFromNow } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import useDeleteBooking from './useDeleteBooking';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 2fr 2.4fr 1.4fr 0.7fr 7rem;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;
const ButtonIcon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  & span:first-child {
    font-size: 1.8rem;
  }

  & span:last-child {
    font-size: 1.8rem;
  }
`;

const Amount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
`;

function BookingRow({
  booking: {
    _id: bookingId,
    startDate,
    endDate,
    numNights,
    status,
    guest,
    cabin: { name: cabinName },
  },
}) {
  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  const navigate = useNavigate();
  const { deleteBooking } = useDeleteBooking();

  // const handleDeleteBooking = (bookingId) => {
  //   deleteBooking(bookingId);
  // };

  return (
    <TableRow>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guest ? guest.guestName : 'Rahul'}</span>
        <span>{guest ? guest.email : 'rahul@gmail.com'}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}{' '}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), 'MMM dd yyyy')} &mdash;{' '}
          {format(new Date(endDate), 'MMM dd yyyy')}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>

      {/* <Amount>{formatCurrency(totalPrice)}</Amount> */}
      <Amount>$115</Amount>
      <ButtonIcon>
        <ButtonIcon onClick={() => navigate(`/bookings/${bookingId}`)}>
          <GrView />
        </ButtonIcon>
        <Modal>
          <Modal.Open modalName="deleteBooking">
            <ButtonIcon>
              <RiDeleteBin6Line />
            </ButtonIcon>
          </Modal.Open>
          <Modal.Window windowName="deleteBooking">
            <ConfirmDelete
              resourceName={cabinName}
              onConfirm={() => deleteBooking(bookingId)}
            />
          </Modal.Window>
        </Modal>
      </ButtonIcon>
    </TableRow>
  );
}

export default BookingRow;
