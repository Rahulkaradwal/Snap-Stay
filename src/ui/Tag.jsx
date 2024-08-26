import styled from 'styled-components';

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);
  @media (max-width: 780px) {
    font-size: 0.6rem;
    /* padding: 0.2rem 0.4rem; */
  }
`;

export default Tag;
