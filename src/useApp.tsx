import React, { useState } from "react";
import { getWeatherData, IGetWeatherDataResponse } from "./data/getWeatherData";

export function useApp() {
  const [cityWeather, setCityWeather] = useState("");
  const [weatherData, setWheatherData] = useState<IGetWeatherDataResponse>();
  const [helperText, setHelperText] = useState("");
  const [errorText, setErrorText] = useState("");

  function resetHelperText() {
    setHelperText("");
  }

  function resetErrorText() {
    setErrorText("");
  }

  function checkIfInputExistsWeather(input: string): boolean {
    if (input.trim().length) {
      return true;
    }
    setHelperText("Type a city to find out");
    setErrorText("This city wasn't founded");
    setWheatherData(undefined);

    return false;
  }
  async function getCityWeather() {
    if (checkIfInputExistsWeather(cityWeather)) {
      const data = await getWeatherData(cityWeather);
      setWheatherData(data);
      setCityWeather("");
    }
  }

  return {
    states: {
      cityWeather,
      setCityWeather,
      weatherData,
      helperText,
      setWheatherData,
      errorText,
    },
    actions: {
      getCityWeather,
      resetHelperText,
      resetErrorText,
    },
  };
}
