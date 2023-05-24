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

const now = new Date();

function Clock() {
  const [date, setDate] = useState({
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDate({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <span
      className="hour-now"
      onClick={() => {
        navigator.clipboard.writeText(
          `${date.hours < 10 ? `0${date.hours}` : date.hours}:${
            date.minutes < 10 ? `0${date.minutes}` : date.minutes
          }`
        );
      }}
    >
      {`${date.hours < 10 ? `0${date.hours}` : date.hours}:${
        date.minutes < 10 ? `0${date.minutes}` : date.minutes
      }`}
    </span>
  );
}

function Week() {
  const [date, setDate] = useState({
    weekday: now.toLocaleDateString("en", { weekday: "long" }),
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDate({
        weekday: now.toLocaleDateString("en", { weekday: "long" }),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span className="weekday">{date.weekday}</span>;
}

function Today() {
  const [date, setDate] = useState({
    today: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDate({
        today: now.getDate(),
        month: now.getMonth(),
        year: now.getFullYear(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="today">
      {`${date.today} ${months[date.month]}, ${date.year}`}
    </span>
  );
}

export interface IClockCardPropos {}

export function ClockCard({}) {
  return (
    <div className="clock-wrapper">
      {Clock()}
      <div className="clock-info-wrapper">
        {Week()}
        {Today()}
      </div>
    </div>
  );
}
