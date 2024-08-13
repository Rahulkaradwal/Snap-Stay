import UserTable from '../features/users/UserTable';
import UserTableOperations from '../features/users/UserTableOperations';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function NewUsers() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Guests</Heading>
        <UserTableOperations />
      </Row>
      <Row>
        <UserTable />
      </Row>
    </>
  );
}

export default NewUsers;
