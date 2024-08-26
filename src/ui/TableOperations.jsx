import styled from 'styled-components';

const TableOperations = styled.div`
  align-items: center;
  gap: 1.6rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 780px) {
    display: grid;
    width: 100%;
    grid-template-columns: 4fr 2.5fr;
    align-items: baseline;
    margin-left: -1.5rem;
    padding-left: -0.5rem;
    gap: 0.5rem;
  }
`;

export default TableOperations;
