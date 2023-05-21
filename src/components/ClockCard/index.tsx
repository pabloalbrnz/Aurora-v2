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

function time() {
  let hour = date.getHours();
  let min = date.getMinutes();

  console.log(hour, min);

  let hourS: string, minS: string;

  if (hour < 10) hourS = "0" + hour;
  else hourS = hour.toString();
  if (min < 10) minS = "0" + min;
  else minS = min.toString();

  return `${hourS}:${minS}`;
}

export interface IClockCardPropos {}

export function ClockCard({}) {
  return (
    <div className="clock-wrapper">
      <span className="hour-now">
        {setInterval(() => {
          time();
        })}
      </span>
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
