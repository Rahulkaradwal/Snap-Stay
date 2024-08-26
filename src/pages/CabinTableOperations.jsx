import Filter from '../ui/Filter';
import SortBy from '../ui/SortBy';
import TableOperations from '../ui/TableOperations';
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', option: 'All' },
          { value: 'no-discount', option: 'No discount' },
          { value: 'with-discount', option: 'With discount' },
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by Name (A-Z)' },
          { value: 'name-desc', label: 'Sort by Name  (Z-A)' },
          {
            value: 'regularPrice-asc',
            label: 'Sort by Price  (low first)',
          },
          {
            value: 'regularPrice-desc',
            label: 'Sort by Price  (high first)',
          },
          { value: 'maxCapacity-asc', label: 'Sort by capaity (low first)' },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
