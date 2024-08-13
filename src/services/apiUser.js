import URL from './URL';

export async function getAllGuests(search) {
  try {
    let res;
    if (search.length > 0) {
      res = await fetch(`${URL}/guests/lastName/${search}`);
    } else {
      res = await fetch(`${URL}/guests/`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error('Users not found');
  }
}

export async function updateGuestStatus(data, id) {
  try {
    await fetch(`${URL}/guests/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    throw new Error('Guest not found');
  }
}

export async function deleteGuestApi(id) {
  try {
    await fetch(`${URL}/guests/${id}`, {
      method: 'DELETE',
    });
  } catch (err) {
    throw new Error('Sorry! Could not delete the user');
  }
}

export async function getCurrentUser() {
  const token = localStorage.getItem('authToken');
  try {
    const response = await fetch(`${URL}/users/currentUser`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Sorry! Could not find the user');
    }

    const data = await response.json();
    return data.user;
  } catch (err) {
    throw new Error('Sorry! Could not find the user');
  }
}

export async function updateUserData(userData) {
  const token = localStorage.getItem('authToken');
  try {
    const response = await fetch(`${URL}/users/updateMe`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Sorry! Could not update the user');
    }

    const data = await response.json();
    return data.user;
  } catch (err) {
    throw new Error('Sorry! Could not update the user');
  }
}
