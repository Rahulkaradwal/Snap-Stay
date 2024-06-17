import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';

// ui components
import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import { useSearchParams } from 'react-router-dom';

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
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

function CabinTable() {
  const [searchParams] = useSearchParams();

  const { data: cabins, isLoading } = useQuery({
    queryFn: getCabins,
    queryKey: ['cabins'],
  });

  if (isLoading) return <Spinner />;

  // Get the discount filter parameter from URL
  const discountVal = searchParams.get('discount') || '';
  let filteredCabins;

  // Filter cabins based on discount value
  if (discountVal === 'all') {
    filteredCabins = cabins;
  } else if (discountVal === 'no-discount') {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  } else if (discountVal === 'with-discount') {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  } else {
    filteredCabins = cabins;
  }

  if (!cabins) return <p> Sorry No Cabin Found</p>;
  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {filteredCabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin._id} />
      ))}
    </Table>
  );
}

export default CabinTable;
