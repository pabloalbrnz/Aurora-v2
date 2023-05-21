import React from "react";

import "./App.css";

import { Card } from "../src/components/Card";

import { useApp } from "./useApp";

function App() {
  const { actions, states } = useApp();
  return (
    <>
      <Card dynamicClass="test">
        <div>
          <input
            onChange={(e) => {
              states.setCity(e.target.value);
              actions.resetHelperText();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                actions.getCityWeather;
              }
            }}
          />
          <button
            onClick={() => {
              actions.getCityWeather();
            }}
          >
            teste
          </button>
        </div>
        {states.weatherData && <span>{states.weatherData.temp}</span>}
        <span>{states.helperText}</span>
      </Card>
    </>
  );
}

export default App;
