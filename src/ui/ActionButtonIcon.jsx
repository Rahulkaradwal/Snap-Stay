import styled from 'styled-components';

const ActionButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-700);
  }
  @media (max-width: 780px) {
    & svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export default ActionButtonIcon;
