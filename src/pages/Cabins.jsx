// ui components
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';

import AddCabin from '../features/cabins/AddCabin';
import CabinTableOperations from './CabinTableOperations';
import ResponsiveHeader from '../ui/ResponsiveHeader';

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <ResponsiveHeader>All cabins</ResponsiveHeader>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
      </Row>
      <Row>
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
