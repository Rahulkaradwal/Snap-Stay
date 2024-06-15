import URL from './URL';

export async function getCabins() {
  const res = await fetch(`${URL}/cabins`);

  if (!res.ok) {
    throw new Error('cabins cound not be loaded');
  }
  const data = await res.json();
  return data.data;
}

export async function deleteCabin(id) {
  try {
    await fetch(`${URL}/cabins/${id}`, {
      method: 'DELETE',
    });
  } catch (err) {
    throw new Error('Could not deleted');
  }
}
