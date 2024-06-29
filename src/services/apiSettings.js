import URL from './URL';

export async function getSettings() {
  try {
    const res = await fetch(`${URL}/settings`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error('Could not load the settings');
  }
}

export async function updateSettingsApi(data, id) {
  try {
    await fetch(`${URL}/settings/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    throw new Error('Sorry! Could not add Cabin');
  }
}
