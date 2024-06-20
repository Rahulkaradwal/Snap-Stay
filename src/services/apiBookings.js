import URL from './URL';

export async function getAllBooking(sort, filter, page) {
  const res = await fetch(
    `${URL}/bookings/getAllBooking?status=${filter}&sort=${sort}&page=${page}`
  );
  if (!res.ok) {
    throw new Error('Bookings cound not be loaded');
  }
  const data = await res.json();
  return data;
}
