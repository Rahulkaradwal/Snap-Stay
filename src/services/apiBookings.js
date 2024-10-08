import URL from './URL';
import { getToday } from '../utils/helpers';

export async function getAllBooking(sort, filter, page) {
  const token = localStorage.getItem('authToken');
  const res = await fetch(
    `${URL}/bookings/getAllBooking?status=${filter}&sort=${sort}&page=${page}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
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

export async function updateBookingStatus(bookingId, formdata) {
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

export async function deleteBooking(id) {
  const token = localStorage.getItem('authToken');
  try {
    await fetch(`${URL}/bookings/deleteBooking/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    throw new Error('Could not deleted');
  }
}

export async function getRecentBookings(lastDate) {
  const todayDate = getToday({ end: true });

  const res = await fetch(
    `${URL}/bookings/getLatestBooking?lastDate=${lastDate}&todayDate=${todayDate}`
  );
  if (!res.ok) {
    throw new Error('Bookings cound not be loaded');
  }
  const data = await res.json();
  return data;
}

export async function getTodaysBooking() {
  const startDate = getToday();
  const res = await fetch(
    `${URL}/bookings/getTodaysBooking?today=${startDate}`
  );
  if (!res.ok) {
    throw new Error('Bookings cound not be loaded');
  }
  const data = await res.json();
  return data;
}
