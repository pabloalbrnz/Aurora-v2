import React from "react";

import "./App.css";

import { Card } from "../src/components/Card";

import { useApp } from "./useApp";
import { WeatherCard } from "./components/WeatherCard";
import { IGetWeatherDataResponse } from "./data/getWeatherData";

function App() {
  const { actions, states } = useApp();
  return (
    <>
      <Card cardTitle="Weather" variant="sm">
        <WeatherCard
          citySearchvalue={states.city}
          weatherCardData={states.weatherData as IGetWeatherDataResponse}
          handleSubmit={() => {
            actions.getCityWeather();
          }}
          onChange={(e) => {
            states.setCity(e.target.value);
            actions.resetHelperText();
          }}
          errorHelperText={states.helperText}
        />
      </Card>
    </>
  );
}

export default App;
