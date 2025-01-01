
export const dataGenerator = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const data = [];

  if (start > end) {
    console.error("Start date must be before or equal to the end date.");
    return [];
  }

  for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
    const formattedDate = date.toISOString().split("T")[0];
    data.push({ date: formattedDate, level: Math.floor(Math.random() * 5) });
    // data.push({ [formattedDate]: { level: Math.floor(Math.random() * 5) } });
  }

  return data;
};