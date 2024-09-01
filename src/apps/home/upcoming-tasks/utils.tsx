import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";

export enum UPCOMING_CONSTANTS {
  ALL = "ALL_TASKS",
  THIS_WEEK = "THIS_WEEK",
  NEXT_WEEK = "NEXT_WEEK",
  THIS_MONTH = "THIS_MONTH",
  NEXT_MONTH = "NEXT_MONTH",
  THIS_YEAR = "THIS_YEAR",
  NEXT_YEAR = "NEXT_YEAR",
}

export const UPCOMING_LISTS = [
  {
    title: "All Tasks",
    value: UPCOMING_CONSTANTS.ALL,
    id: 0,
  },
  {
    title: "This Week",
    value: UPCOMING_CONSTANTS.THIS_WEEK,
    id: 1,
  },
  {
    title: "Next Week",
    value: UPCOMING_CONSTANTS.NEXT_WEEK,
    id: 2,
  },
  {
    title: "This Month",
    value: UPCOMING_CONSTANTS.THIS_MONTH,
    id: 3,
  },
  {
    title: "Next Month",
    value: UPCOMING_CONSTANTS.NEXT_MONTH,
    id: 4,
  },
  {
    title: "This Year",
    value: UPCOMING_CONSTANTS.THIS_YEAR,
    id: 5,
  },
  {
    title: "Next Year",
    value: UPCOMING_CONSTANTS.NEXT_YEAR,
    id: 6,
  },
];

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(weekday);
dayjs.extend(weekOfYear);

export const getStartAndEndDates = (
  period: UPCOMING_CONSTANTS
): {
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
} => {
  let startDate, endDate;

  switch (period) {
    case UPCOMING_CONSTANTS.THIS_WEEK:
      startDate = dayjs().startOf("week");
      endDate = dayjs().endOf("week");
      break;
    case UPCOMING_CONSTANTS.NEXT_WEEK:
      startDate = dayjs().add(1, "week").startOf("week");
      endDate = dayjs().add(1, "week").endOf("week");
      break;
    case UPCOMING_CONSTANTS.THIS_MONTH:
      startDate = dayjs().startOf("month");
      endDate = dayjs().endOf("month");
      break;
    case UPCOMING_CONSTANTS.NEXT_MONTH:
      startDate = dayjs().add(1, "month").startOf("month");
      endDate = dayjs().add(1, "month").endOf("month");
      break;
    case UPCOMING_CONSTANTS.THIS_YEAR:
      startDate = dayjs().startOf("year");
      endDate = dayjs().endOf("year");
      break;
    case UPCOMING_CONSTANTS.NEXT_YEAR:
      startDate = dayjs().add(1, "year").startOf("year");
      endDate = dayjs().add(1, "year").endOf("year");
      break;
    default:
      throw new Error("Invalid period");
  }

  return { startDate, endDate };
};

export const isDateBetween = (
  date: dayjs.Dayjs,
  startDate: dayjs.Dayjs,
  endDate: dayjs.Dayjs,
  inclusive = true
) => {
  const dayjsDate = dayjs(date);
  const dayjsStartDate = dayjs(startDate);
  const dayjsEndDate = dayjs(endDate);

  if (inclusive) {
    return (
      dayjsDate.isSameOrAfter(dayjsStartDate) &&
      dayjsDate.isSameOrBefore(dayjsEndDate)
    );
  } else {
    return (
      dayjsDate.isAfter(dayjsStartDate) && dayjsDate.isBefore(dayjsEndDate)
    );
  }
};
