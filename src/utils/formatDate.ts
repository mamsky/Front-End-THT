export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month: { [key: number]: string } = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };
  const getDay = date.getDay();
  const getMonth = date.getMonth() + 1;
  const nameMonth = month[getMonth];
  const getYear = date.getFullYear();
  return `${nameMonth} ${getDay}, ${getYear}`;
};
