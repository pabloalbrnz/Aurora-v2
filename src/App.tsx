import React from "react";

import "./App.css";

import { Card } from "../src/components/Card";

import { useApp } from "./useApp";
import { WeatherCard } from "./components/WeatherCard";
import { IGetWeatherDataResponse } from "./data/getWeatherData";
import { ClockCard } from "./components/ClockCard";

function App() {
  const { actions, states } = useApp();
  return (
    <>
      <div className="cards">
        <Card cardTitle="Clock" dynamicClass="clock" variant="sm">
          <ClockCard />
        </Card>
        <Card cardTitle="Weather" dynamicClass="weather" variant="sm">
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
      </div>
    </>
  );
}

export default App;
