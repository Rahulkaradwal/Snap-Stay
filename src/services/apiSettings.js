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
