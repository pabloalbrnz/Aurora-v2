import { useState } from "react";
import "./style.css";
import { useDate } from "./useCalendarCard";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export interface ICalendarCardProps {}

const date = new Date();

const [nav, setNav] = useState(0);
const { days, dateDisplay } = useDate(nav);

function CalendarHeader() {
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

function CalendarDays() {
  return (
    <div className="calendar-days">
      {days.map((d, index) => (
        <div
          className={`day ${d.value === "padding" ? "padding" : ""} ${
            d.isCurrentDay ? "currentDay" : ""
          }`}
        >
          {d.value === "padding" ? "" : d.value}
        </div>
      ))}
    </div>
  );
}

export function CalendarCard({}: ICalendarCardProps) {
  return (
    <div className="calendar-wrapper">
      <CalendarHeader />
      <div className="calendar-weekdays">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
      <CalendarDays />
    </div>
  );
}
