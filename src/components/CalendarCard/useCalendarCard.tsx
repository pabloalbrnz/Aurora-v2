import { useEffect, useState } from "react";

export const useDate = (nav) => {
  const [dateDisplay, setDateDisplay] = useState("");
  const [days, setDays] = useState([]);

  useEffect(() => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dt = new Date();

    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    let prevMonth = month - 1 < 0 ? 11 : month - 1;
    let nextMonth = month + 1 > 11 ? 0 : month + 1;

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    setDateDisplay(
      `${dt.toLocaleDateString("en-us", { month: "long" })} ${year}`
    );
    const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

    const daysArr = [];

    for (
      let i = new Date(year, prevMonth + 1, 0).getDate(), z = 0;
      i >= paddingDays && z < paddingDays;
      i--, z++
    ) {
      const inactiveDayString = `${i - paddingDays}/${prevMonth + 1}/${year}`;

      daysArr.unshift({
        class: "inactive",
        value: i,
        month: month,
        isCurrentDay: false,
        date: inactiveDayString,
      });
    }
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${i - paddingDays}/${month + 1}/${year}`;

      if (i > paddingDays) {
        daysArr.push({
          class: "active",
          value: i - paddingDays,
          month: month,
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString,
        });
      }
    }
    for (let i = 1; daysArr.length <= 41; i++) {
      const inactiveDayString = `${i}/${nextMonth + 1}/${year}`;

      daysArr.push({
        class: "inactive",
        value: i,
        month: month,
        isCurrentDay: false,
        date: inactiveDayString,
      });
    }
    setDays(daysArr);
  }, [nav]);

  return {
    days,
    dateDisplay,
  };
};
