import UserTable from '../features/users/UserTable';
import UserTableOperations from '../features/users/UserTableOperations';
import ResponsiveHeader from '../ui/ResponsiveHeader';
import Row from '../ui/Row';

function NewUsers() {
  return (
    <>
      <Row type="horizontal">
        <ResponsiveHeader>All Users</ResponsiveHeader>
        <UserTableOperations />
      </Row>
      <Row>
        <UserTable />
      </Row>
    </>
  );
}

export default NewUsers;
