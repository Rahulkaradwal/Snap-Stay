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

export async function getBooking(bookingId) {
  const res = await fetch(`${URL}/bookings/getBooking/${bookingId}`);
  if (!res.ok) {
    throw new Error('Booking cound not be loaded');
  }
  const data = await res.json();
  return data;
}

export async function checkInBooking(bookingId, formdata) {
  const res = await fetch(`${URL}/bookings/getBooking/${bookingId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formdata),
  });
  if (!res.ok) {
    throw new Error('Booking cound not be loaded');
  }
  const data = await res.json();
  return data;
}
