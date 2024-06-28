import URL from './URL';

export async function getAllUsers(search) {
  try {
    let res;
    if (search.length > 0) {
      res = await fetch(`${URL}/users/name/${search}`);
    } else {
      res = await fetch(`${URL}/users/`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error('Users not found');
  }
}
