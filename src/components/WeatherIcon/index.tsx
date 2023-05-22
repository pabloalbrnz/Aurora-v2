import "./style.css";

export interface IWeatherIconProps {
  icon: string;
}

export function WeatherIcon({ icon }: IWeatherIconProps) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
      alt=""
      className="weather-icon"
    />
  );
}
