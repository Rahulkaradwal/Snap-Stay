import URL from './URL';

// get all cabins request
export async function getCabins() {
  const res = await fetch(`${URL}/cabins`);

  if (!res.ok) {
    throw new Error('cabins cound not be loaded');
  }
  const data = await res.json();
  return data.data;
}

// delete a cabin request
export async function deleteCabin(id) {
  try {
    await fetch(`${URL}/cabins/${id}`, {
      method: 'DELETE',
    });
  } catch (err) {
    throw new Error('Could not deleted');
  }
}

// create a cabin request

export async function createEditCabin(formData, id) {
  try {
    if (!id) {
      await fetch(`${URL}/cabins`, {
        method: 'POST',
        body: formData,
      });
    } else {
      await fetch(`${URL}/cabins/${id}`, {
        method: 'PATCH',
        body: formData,
      });
    }
  } catch (err) {
    throw new Error('Sorry! Could not add Cabin');
  }
}
