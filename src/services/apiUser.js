import URL from './URL';

export async function getAllUsers() {
  try {
    const res = await fetch(`${URL}/users/`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error('Users not found');
  }
}
