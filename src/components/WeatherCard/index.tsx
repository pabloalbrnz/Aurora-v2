import { IGetWeatherDataResponse } from "../../data/getWeatherData";

export interface IWeatherCardProps {
  weatherCardData: IGetWeatherDataResponse;
  citySearchvalue: string;
  setCitySearchValue: (value: React.SetStateAction<string>) => void;
  handleSubmit: () => void;
}

export function WeatherCard({
  weatherCardData,
  citySearchvalue,
  setCitySearchValue,
  handleSubmit,
}: IWeatherCardProps) {
  return (
    <div>
      <div>
        <input
          value={citySearchvalue}
          onChange={(e) => {
            setCitySearchValue(e.target.value);
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
