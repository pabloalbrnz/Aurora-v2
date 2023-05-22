import "./style.css"

export interface IWeatherIconProps {
  display: "hidden" | "";
  icon: string;
}

export function WeatherIcon({ display, icon }: IWeatherIconProps) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
      alt=""
      className={`weather-icon ${display}`}
    />
  );
}
