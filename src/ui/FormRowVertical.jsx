import styled from 'styled-components';

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;

  @media (min-width: 768px) {
    gap: 1rem;
    padding: 1.6rem 0;
  }

  @media (min-width: 1024px) {
    gap: 1.2rem;
    padding: 2rem 0;
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const Error = styled.span`
  font-size: 1.2rem;
  color: var(--color-red-700);

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
