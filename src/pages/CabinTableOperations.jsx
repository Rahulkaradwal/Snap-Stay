import Filter from '../ui/Filter';
import SortBy from '../ui/SortBy';
function CabinTableOperations() {
  return (
    <>
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
          { value: 'asce-AtoZ', label: 'Sort by Name (A-Z)' },
          { value: 'desc-ZtoA', label: 'Sort by Name  (Z-A)' },
          {
            value: 'asc-regularPrice',
            label: 'Sort by Price  (low first)',
          },
          {
            value: 'desc-regularPrice',
            label: 'Sort by Price  (high first)',
          },
          { value: 'desc-maxCapacity', label: 'Sort by Max Capacity' },
        ]}
      />
    </>
  );
}

export default CabinTableOperations;
