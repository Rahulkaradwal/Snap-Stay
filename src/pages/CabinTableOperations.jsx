import Filter from '../ui/Filter';
import SortBy from '../ui/SortBy';
import Select from '../ui/Select';
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
        sortField="sort"
        options={[
          { value: 'asce-AtoZ', label: 'Sort by Name (A-Z)' },
          { value: 'desc-ZtoA', label: 'Sort by Name  (Z-A)' },
          {
            value: 'asc-regularPrice',
            label: 'Sort by Regular Price  (low first)',
          },
          {
            value: 'desc-regularPrice',
            label: 'Sort by Regular Price  (high first)',
          },
          { value: 'desc-maxCapacity', label: 'Sort by Max Capacity' },
        ]}
      />
    </>
  );
}

export default CabinTableOperations;
