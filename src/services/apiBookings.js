import URL from './URL';

export async function getAllBooking(sortVal, filterVal) {
  const res = await fetch(
    `${URL}/bookings/getAllBooking?status=${filterVal}&sort=${sortVal}`
  );
  if (!res.ok) {
    throw new Error('Bookings cound not be loaded');
  }
  const data = await res.json();
  return data.data;
}
