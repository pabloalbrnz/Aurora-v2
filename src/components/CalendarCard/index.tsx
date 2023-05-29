import { useEffect, useState } from "react";
import "./style.css";
import { useDate } from "./useCalendarCard";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export interface ICalendarCardProps {}

function CalendarHeader({ nav, setNav }) {
  const { days, dateDisplay } = useDate(nav);
  return (
    <div className="calendar-header">
      <div>
        <CaretLeft
          onClick={() => setNav(nav - 1)}
          className="calendar-prev-button"
          weight="bold"
          size="16px"
        />
        <span className="calendar-month-text">{dateDisplay}</span>
        <CaretRight
          onClick={() => setNav(nav + 1)}
          className="calendar-next-button"
          weight="bold"
        />
      </div>
    </div>
  );
}

function CalendarDays({ nav }) {
  const { days, dateDisplay } = useDate(nav);

  const [currentDayIndex, setCurrentDayIndex] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const currentDay = now.getDate();

      const foundIndex = days.findIndex((d) => d.value === currentDay);

      setCurrentDayIndex(foundIndex);
    }, 1000);

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <div className="calendar-days">
      {days.map((d, index) => (
        <div
          key={index}
          className={`day ${d.class === "inactive" ? "inactive" : "active"} ${
            currentDayIndex === index ? "current-day" : ""
          }`}
        >
          {d.value}
        </div>
      ))}
    </div>
  );
}

function Calendar() {
  const [nav, setNav] = useState(0);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date().toLocaleDateString("en-us", {
    weekday: "short",
  });
  return (
    <div className="calendar-wrapper">
      <CalendarHeader nav={nav} setNav={setNav} />
      <div className="calendar-weekdays">
        {weekdays.map((weekday, index) => {
          const [weekToday, setWeekToday] = useState("");
          useEffect(() => {
            const timer = setInterval(() => {
              today === weekday ? setWeekToday("calendar-weekday-today") : "";
            }, 1000);
            return () => clearInterval(timer);
          }, [weekToday, setWeekToday]);
          return (
            <span key={index} className={weekToday}>
              {weekday}
            </span>
          );
        })}
      </div>
      <CalendarDays nav={nav} />
    </div>
  );
}

export function CalendarCard({}: ICalendarCardProps) {
  return <Calendar />;
}
