import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';
import Input from './Input';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ButtonIcon = styled.div`
  cursor: pointer;
  font-size: 2.7rem;
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
