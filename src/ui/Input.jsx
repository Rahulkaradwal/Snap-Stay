import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.6rem 0.8rem; /* Default padding for smaller screens */
  box-shadow: var(--shadow-sm);
  font-size: 1rem; /* Default font size for smaller screens */

  @media (min-width: 768px) {
    padding: 0.8rem 1rem; /* Increased padding for medium-sized screens */
    font-size: 1.1rem; /* Slightly larger font size for medium-sized screens */
  }

  @media (min-width: 1024px) {
    padding: 1rem 1.2rem; /* Further increased padding for larger screens */
    font-size: 1.2rem; /* Larger font size for larger screens */
  }
`;

export default Input;
