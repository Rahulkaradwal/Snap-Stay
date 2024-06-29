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

export async function updateUserStatus(data, id) {
  try {
    await fetch(`${URL}/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    throw new Error('Users not found');
  }
}

export async function deleteUser(id) {
  try {
    await fetch(`${URL}/users/${id}`, {
      method: 'DELETE',
    });
  } catch (err) {
    throw new Error('Sorry! Could not delete the user');
  }
}
