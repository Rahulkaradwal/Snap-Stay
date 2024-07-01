import styled from 'styled-components';
import UserRow from './UserRow';
import useAllUser from './useAllUser';
import Spinner from '../../ui/Spinner';

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 2fr 2fr 1.4fr 1fr 1fr;
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

const NoData = styled.div`
  margin: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
`;

function UserTable() {
  const { data, isLoading } = useAllUser();
  const users = data.data;

  if (isLoading) {
    return <Spinner />;
  }

  if (!users) return <NoData>Sorry! Users not found</NoData>;
  return (
    <>
      <Table>
        <TableHeader role="row">
          <div>Full Name</div>
          <div>Email Address</div>
          <div>Joined Date</div>
          <div>Status</div>
          <div>Action</div>
          <div></div>
        </TableHeader>
        {users.map((user) => (
          <UserRow key={user._id} user={user} />
        ))}
      </Table>
    </>
  );
}

export default UserTable;
