import { IGetWeatherDataResponse } from "../../data/getWeatherData";

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
          <p>{weatherCardData.temp} °</p>
          <p>{weatherCardData.humidity} %</p>
          <p>{weatherCardData.pressure}hPa</p>
        </div>
      )}
    </div>
  );
}
