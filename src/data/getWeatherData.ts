import { cityWeatherDTO } from "./dto/cityWeatherDTO";

export interface IGetWeatherDataResponse {
  temp: string;
}

export async function getWeatherData(
  city: string
): Promise<IGetWeatherDataResponse> {
  const key = import.meta.env.VITE_API_PERSONAL_KEY;

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  const result = await fetch(URL);

  const data = result.json().then((data: cityWeatherDTO) => {
    return {
      temp: data.base,
    };
  });

  return data;
}
