// ui components
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';

import AddCabin from '../features/cabins/AddCabin';
import CabinTableOperations from './CabinTableOperations';
import ResponsiveHeader from '../ui/ResponsiveHeader';
import styled from 'styled-components';

const CabinDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  overflow-x: hidden;
`;

function Cabins() {
  return (
    <CabinDiv>
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
    </CabinDiv>
  );
}

export default Cabins;
