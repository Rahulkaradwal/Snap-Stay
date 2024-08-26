import styled from 'styled-components';

const TableOperations = styled.div`
  display: grid;
  grid-template-columns: 4fr 2.5fr;
  align-items: center;
  gap: 1.6rem;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 780px) {
    align-items: baseline;
    margin-left: -1.5rem;
    padding-left: -0.5rem;
    gap: 0.5rem;
  }
`;

export default TableOperations;
