import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import ActionButtonIcon from '../../ui/ActionButtonIcon';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  justify-content: space-between;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (max-width: 480px) {
    grid-template-columns: 5.5rem 4rem 5rem 1rem 3rem;
    font-size: 1.2rem;
    column-gap: 1rem;
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);

  @media (max-width: 480px) {
    display: none;
  }
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const {
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    _id: cabinId,
  } = cabin;

  const { isDeleting, deleteCabin } = useDeleteCabin();

  return (
    <TableRow>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? <Discount>{discount}</Discount> : <span>&mdash;</span>}
      <div>
        <Modal>
          <Modal.Open modalName="editForm">
            <ActionButtonIcon disabled={isDeleting}>
              <HiPencil />
            </ActionButtonIcon>
          </Modal.Open>
          <Modal.Window windowName="editForm">
            <CreateCabinForm cabin={cabin} />
          </Modal.Window>
          <Modal.Open modalName="deleteCabin">
            <ActionButtonIcon>
              <HiTrash />
            </ActionButtonIcon>
          </Modal.Open>
          <Modal.Window windowName="deleteCabin">
            <ConfirmDelete
              resourceName={name}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </TableRow>
  );
}

export default CabinRow;
