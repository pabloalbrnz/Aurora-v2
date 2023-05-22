import { useState, useEffect } from "react";

import "./style.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Dezember",
];

const date = new Date();
const month = date.getMonth();

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    refreshClock();
  });

  return (
    <span className="hour-now">
      {date.toLocaleTimeString().substring(0, 5)}
    </span>
  );
}

export interface IClockCardPropos {}

export function ClockCard({}) {
  return (
    <div className="clock-wrapper">
      {Clock()}
      <div className="clock-info-wrapper">
        <span className="weekday">
          {date.toLocaleDateString("en", { weekday: "long" })}
        </span>
        <span className="today">{`${date.getDate()} ${
          months[month]
        }, ${date.getFullYear()}`}</span>
      </div>
    </div>
  );
}
