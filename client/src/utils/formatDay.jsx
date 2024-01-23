export function formatDay(timeStr) {
  const dateTime = new Date(timeStr);
  const dayOfWeek = dateTime.toLocaleDateString("en-US", { weekday: "short" });
  const month = dateTime.toLocaleDateString("en-US", { month: "short" });
  const day = dateTime.getDate();

  return `${day} ${month},${dayOfWeek} `;
}
