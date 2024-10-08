import styled from 'styled-components';
import Button from './Button';
import Heading from './Heading';

const StyledConfirmDelete = styled.div`
  /* width: 40rem; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({
  resourceName,
  onConfirm,
  disabled,
  onCloseModel,
  actionName = 'Delete',
}) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">
        {actionName} {resourceName}
      </Heading>
      <p>
        Are you sure you want to {actionName} {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          onClick={onCloseModel}
          $variation="secondary"
          disabled={disabled}
        >
          Cancel
        </Button>
        <Button onClick={onConfirm} $variation="danger" disabled={disabled}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
