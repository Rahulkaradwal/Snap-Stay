import styled from 'styled-components';
import Search from '../../ui/Search';

const SearchDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;

  @media (max-width: 780px) {
    width: 97%;
    margin-bottom: -2rem;
  }
`;

function UserTableOperations() {
  return (
    <SearchDiv>
      <Search />
    </SearchDiv>
  );
}

export default UserTableOperations;
