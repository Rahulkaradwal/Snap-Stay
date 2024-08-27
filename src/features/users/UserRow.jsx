import styled from 'styled-components';
import ActionButtonIcon from '../../ui/ActionButtonIcon';
import { GrView } from 'react-icons/gr';
import Modal from '../../ui/Modal';
import { RiDeleteBin6Line } from 'react-icons/ri';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { HiPencil } from 'react-icons/hi2';
import { GiSightDisabled } from 'react-icons/gi';
import { format } from 'date-fns';
import useUpdateStatus from './useUpdateStatus';
import useDelete from './useDelete';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1.4fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (max-width: 780px) {
    /* padding-right: 0.5rem; */
    display: grid;
    grid-template-columns: 7rem 8rem 5rem 4.5rem 3.5rem;
    column-gap: 0.3rem;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
`;

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';

  @media (max-width: 780px) {
    font-size: 1rem;
  }
`;
const Status = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';

  @media (max-width: 780px) {
    font-size: 1rem;
  }
`;

const Joined = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';

  @media (max-width: 780px) {
    font-size: 1rem;
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

  @media (max-width: 780px) {
    font-size: 1rem;
    gap: 0.2rem;
    flex-direction: column;
    margin-right: -1rem;
  }
`;

function UserRow({ user }) {
  const {
    active: status,
    createdAt: joinedDate,
    email,
    firstName,
    lastName,
    _id: id,
  } = user;

  const { updateStatus, isLoading } = useUpdateStatus();
  const handleUserStatusUpdate = () => {
    const data = { active: !status };
    updateStatus({ data, id });
  };

  const { deleteGuest, isLoading: deleteLoading } = useDelete();

  return (
    <TableRow>
      <Name>{firstName + ' ' + lastName}</Name>
      <Email>{email}</Email>
      <Joined>{format(new Date(joinedDate), 'MMM dd yyyy')}</Joined>
      <Status>{status ? 'Active' : 'De-active'}</Status>
      <ButtonIcon>
        <Modal>
          {/* <Modal.Open modalName="updateUserStatus">
            <ActionButtonIcon disabled={isLoading}>
              {status === true ? <GiSightDisabled /> : <GrView />}
            </ActionButtonIcon>
          </Modal.Open> */}
          {/* <Modal.Window windowName="updateUserStatus">
            <ConfirmDelete
              resourceName={lastName}
              actionName="Change Status for"
              onConfirm={handleUserStatusUpdate}
            />
          </Modal.Window>
          <ActionButtonIcon>
            <HiPencil />
          </ActionButtonIcon> */}

          <Modal.Open modalName="deleteUser">
            <ActionButtonIcon disabled={deleteLoading}>
              <RiDeleteBin6Line />
            </ActionButtonIcon>
          </Modal.Open>
          <Modal.Window windowName="deleteUser">
            <ConfirmDelete
              resourceName={lastName}
              onConfirm={() => deleteGuest(id)}
            />
          </Modal.Window>
        </Modal>
      </ButtonIcon>
    </TableRow>
  );
}

export default UserRow;
