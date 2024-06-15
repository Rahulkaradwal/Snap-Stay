import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import { deleteCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
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
  const queryClient = useQueryClient();

  const {
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    _id: cabinId,
  } = cabin;

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      toast.success('Cabin Deleted Successfully!');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: () => {
      toast.error('Could not delete!');
    },
  });

  // temporary states
  const [showForm, setShowForm] = useState();

  return (
    <>
      <TableRow>
        <Img src={`/cabins/${image}`} />
        <Cabin>{name}</Cabin>
        <div>fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{discount}</Discount>
        <div>
          <button onClick={() => setShowForm((s) => !s)} disabled={isDeleting}>
            Edit
          </button>
          <button onClick={() => mutate(cabinId)} disabled={isDeleting}>
            Delete
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabin={cabin} />}
    </>
  );
}

export default CabinRow;
