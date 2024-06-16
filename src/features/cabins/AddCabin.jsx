import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';

function AddCabin() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const closeModel = () => {
    setIsModelOpen((open) => !open);
  };
  return (
    <div>
      <Button onClick={closeModel}>Add Cabin</Button>
      {isModelOpen && (
        <Modal onClose={closeModel}>
          <CreateCabinForm onCloseModel={closeModel} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
