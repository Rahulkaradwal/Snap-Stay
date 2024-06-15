import { useState } from 'react';

// ui components
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';
import CreateCabinForm from '../features/cabins/CreateCabinForm';

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter/Sort</p>
      </Row>

      <Row>
        <CabinTable />
      </Row>
      <Row>
        <Button onClick={() => setShowForm((s) => !s)}>Add Cabin</Button>

        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
