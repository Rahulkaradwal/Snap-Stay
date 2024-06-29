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
`;

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;
const Status = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Joined = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Email = styled.div`
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

function UserRow({ user }) {
  console.log(user);
  const {
    active: status,
    createdAt: joinedDate,
    email,
    fullName,
    _id: id,
  } = user;

  const { updateStatus, isLoading } = useUpdateStatus();
  const { deleteUser } = useDelete();
  const handleUserStatusUpdate = () => {
    const data = { active: !status };
    updateStatus({ data, id });
  };

  return (
    <TableRow>
      <Name>{fullName}</Name>
      <Email>{email}</Email>
      <Joined>{format(new Date(joinedDate), 'MMM dd yyyy')}</Joined>
      <Status>{status ? 'Active' : 'De-active'}</Status>
      <ButtonIcon>
        <Modal>
          <Modal.Open modalName="updateUserStatus">
            <ActionButtonIcon disabled={isLoading}>
              {status === true ? <GiSightDisabled /> : <GrView />}
            </ActionButtonIcon>
          </Modal.Open>
          <Modal.Window windowName="updateUserStatus">
            <ConfirmDelete
              resourceName={fullName}
              actionName="Change Status for"
              onConfirm={handleUserStatusUpdate}
            />
          </Modal.Window>
          <ActionButtonIcon>
            <HiPencil />
          </ActionButtonIcon>

          <Modal.Open modalName="deleteUser">
            <ActionButtonIcon>
              <RiDeleteBin6Line />
            </ActionButtonIcon>
          </Modal.Open>
          <Modal.Window windowName="deleteUser">
            <ConfirmDelete
              resourceName={fullName}
              onConfirm={() => deleteUser(id)}
            />
          </Modal.Window>
        </Modal>
      </ButtonIcon>
    </TableRow>
  );
}

export default UserRow;
