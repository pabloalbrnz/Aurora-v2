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
      <Card cardTitle="Weather">
        <WeatherCard
          citySearchvalue={states.city}
          setCitySearchValue={(e) => states.setCity(e)}
          weatherCardData={states.weatherData as IGetWeatherDataResponse}
          handleSubmit={() => {
            actions.getCityWeather();
          }}
        />
      </Card>
    </>
  );
}

export default App;
