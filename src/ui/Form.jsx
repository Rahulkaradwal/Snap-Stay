import styled, { css } from 'styled-components';

const Form = styled.form`
  ${(props) =>
    props.type !== 'regular' &&
    css`
      padding: 2rem; /* Default padding for non-regular forms on smaller screens */

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === 'modal' &&
    css`
      width: 100%; /* Default width for modals on smaller screens */
      max-width: 90%; /* To ensure it doesn't exceed the viewport */

      @media (min-width: 768px) {
        width: 80rem; /* Fixed width for larger screens */
      }
    `}

  overflow: hidden;
  font-size: 1.2rem; /* Default font size for smaller screens */

  @media (min-width: 768px) {
    font-size: 1.4rem; /* Larger font size for medium screens */
    padding: ${(props) =>
      props.type !== 'regular'
        ? '2.4rem 3.2rem'
        : '0'}; /* Adjust padding for medium screens */
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem; /* Larger font size for larger screens */
    padding: ${(props) =>
      props.type !== 'regular'
        ? '2.4rem 4rem'
        : '0'}; /* Adjust padding for large screens */
  }
`;

Form.defaultProps = {
  type: 'regular',
};

export default Form;
