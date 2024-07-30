export const getCurrentTime = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-based
  const date = currentTime.getDate().toString().padStart(2, '0');
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');

  // Concatenate year, month, date, hours, and minutes
  const time = `${year}${month}${date}${hours}${minutes}`;
  return Number(time);
};

export default getCurrentTime;

export const getCurrentTimePlus30Minutes = () => {
  const currentTime = new Date();

  // Add 30 minutes to the current time
  currentTime.setMinutes(currentTime.getMinutes() + 30);

  // Extract the year, month, date, hours, and minutes after adding 30 minutes
  const year = currentTime.getFullYear();
  const month = (currentTime.getMonth() + 1).toString().padStart(2, '0');
  const date = currentTime.getDate().toString().padStart(2, '0');
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');

  // Concatenate year, month, date, hours, and minutes
  const time = `${year}${month}${date}${hours}${minutes}`;
  return Number(time);
};
