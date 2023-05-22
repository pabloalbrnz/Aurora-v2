import { IGetWeatherDataResponse } from "../../data/getWeatherData";

import "./style.css";

import { WeatherIcon } from "../WeatherIcon";

export interface IWeatherCardProps {
  weatherCardData: IGetWeatherDataResponse;
  citySearchvalue: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: () => void;
  errorHelperText: {
    text: string;
    icon: JSX.Element
  };

}

export function WeatherCard({
  weatherCardData,
  citySearchvalue,
  handleSubmit,
  errorHelperText,
  onChange,
}: IWeatherCardProps) {
  return (
    <div className="weather-card">
      <div className="input-wrapper">
        <input
          className="weather-input"
          placeholder="Your City"
          value={citySearchvalue}
          onChange={(e) => {
            onChange(e);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <button
          className="weather-search"
          onClick={() => {
            handleSubmit();
          }}
          type="submit"
        >
          Search
        </button>
      </div>
      <div>
      <span className="error-message">{errorHelperText.icon}{errorHelperText.text}</span>
      </div>
      {weatherCardData && (
        <div className="weather-wrapper">
          <span className="city-name">{weatherCardData.name}</span>
          <div className="temperature">
            <WeatherIcon
              icon={weatherCardData.icon ? weatherCardData.icon : ""}
            />
            <span className="temperature-string">
              {weatherCardData.temp.toString().substring(0, 2)}°
            </span>
          </div>
          <div className="weather-info-wrapper">
            <span className="humidity">
              <b>Humidity:</b> {weatherCardData.humidity}%
            </span>
            <span className="pressure">
              <b>Pressure:</b> {weatherCardData.pressure}hPa
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
