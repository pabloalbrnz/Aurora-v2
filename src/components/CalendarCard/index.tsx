import "./style.css";

export interface ICalendarCardProps {}

const date = new Date();

export function CalendarCard({}: ICalendarCardProps) {
  return (
    <div className="calendar-wrapper">
      <div className="today-month">
        <div className="button-wrapper">
          <button className="prev-button">{"<"}</button>
        </div>
        <span className="today-month-str">
          {`${date.toLocaleDateString("en", { month: "long" })} ${date.getFullYear()}`}
        </span>
        <div className="button-wrapper">
          <button className="next-button">{">"}</button>
        </div>
      </div>
      <div className="weekday"></div>
      <div className="month-days"></div>
    </div>
  );
}
