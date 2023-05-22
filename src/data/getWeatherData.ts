import { cityWeatherDTO } from "./dto/cityWeatherDTO";

export interface IGetWeatherDataResponse {
  temp: number;
  icon: string;
  humidity: number;
  pressure: number;
}

export async function getWeatherData(
  city: string
): Promise<IGetWeatherDataResponse> {
  const key = import.meta.env.VITE_WEATHER_API_KEY;

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  const result = await fetch(URL);

  const data: Promise<IGetWeatherDataResponse> = result
    .json()
    .then((data: cityWeatherDTO) => {
      return {
        temp: data.main.temp,
        icon: data.weather[0].icon,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
      };
    });

  return data;
}
