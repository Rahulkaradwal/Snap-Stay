import URL from './URL';

export async function login(userData) {
  try {
    const res = await fetch(`${URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Could not find the user');
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message || 'An error occurred');
  }
}
