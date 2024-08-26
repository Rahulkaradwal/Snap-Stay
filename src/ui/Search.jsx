import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.6rem 0.8rem; /* Default padding for smaller screens */
  box-shadow: var(--shadow-sm);
  height: 3.5rem;
  font-size: 1rem; /* Default font size for smaller screens */

  @media (max-width: 480px) {
    height: 3.5rem;
    width: 90%;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 1.2rem; /* Further increased padding for larger screens */
    font-size: 1.2rem; /* Larger font size for larger screens */
  }
`;

const ButtonIcon = styled.div`
  cursor: pointer;
  font-size: 3rem;
  padding-top: 0.4rem;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function Search() {
  const [searchVal, setSearchVal] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = () => {
    searchParams.set('search', searchVal);
    setSearchParams(searchParams);
  };
  return (
    <SearchBar>
      <Input
        placeholder="Search by name"
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <ButtonIcon onClick={handleSubmit}>
        <IoSearch />
      </ButtonIcon>
    </SearchBar>
  );
}

export default Search;
