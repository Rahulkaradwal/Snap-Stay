import styled from 'styled-components';

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 780px) {
    align-items: baseline;
    margin-left: -1.5rem;
    padding-left: -0.5rem;
    width: 100%;
    gap: 0.5rem;
    margin-bottom: -1.5rem;
    padding-right: 0.2rem;
  }
`;

export default TableOperations;
