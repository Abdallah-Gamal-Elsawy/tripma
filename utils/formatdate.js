import dayjs from "dayjs";

const getDaySuffix = (day) => {
  if (day >= 11 && day <= 13) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = dayjs(dateString);
  if (!date.isValid()) return "Invalid Date";

  const day = date.date();
  const month = date.format("MMMM");
  const year = date.year(); // السنة
  const daySuffix = getDaySuffix(day);

  return `  ${month} ${day} ${daySuffix}, ${year}`;
};

export default formatDate;
