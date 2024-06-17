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
      {/* <SortBy>
        <Select />
      </SortBy> */}
    </>
  );
}

export default CabinTableOperations;
