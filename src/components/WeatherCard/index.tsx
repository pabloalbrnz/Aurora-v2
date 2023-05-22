import { IGetWeatherDataResponse } from "../../data/getWeatherData";

import { WeatherIcon } from "../WeatherIcon";

export interface IWeatherCardProps {
  weatherCardData: IGetWeatherDataResponse;
  citySearchvalue: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: () => void;
  errorHelperText: string;
}

export function WeatherCard({
  weatherCardData,
  citySearchvalue,
  handleSubmit,
  errorHelperText,
  onChange,
}: IWeatherCardProps) {
  return (
    <div>
      <div>
        <input
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
          onClick={() => {
            handleSubmit();
          }}
        >
          Search
        </button>
      </div>
      <span>{errorHelperText}</span>
      {weatherCardData && (
        <div>
          <div className="temperature">
            <WeatherIcon
              display=""
              icon={weatherCardData.icon ? weatherCardData.icon : ""}
            />
            <span className="temperature-string">
              {weatherCardData.temp.toString().substring(0, 2)}°
            </span>
          </div>
          <span className="humidity">{weatherCardData.humidity}%</span>
          <span className="pressure">{weatherCardData.pressure}hPa</span>
        </div>
      )}
    </div>
  );
}
