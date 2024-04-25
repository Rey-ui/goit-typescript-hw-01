enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek) => {
  if (day === DayOfWeek.Sunday) {
    return `today is a day off (${day})`;
  } else {
    return `today is not a day off (${day})`;
  }
};
