export function formatTime(timeStr) {
  const dateTime = new Date(timeStr);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const convertedHours = hours % 12 || 12;

  return `
   ${convertedHours}:${minutes}${ampm}`;
}
