import { IGetWeatherDataResponse } from "../../data/getWeatherData";

import "./style.css";

import { WeatherIcon } from "../WeatherIcon";
import React from "react";
import { useWeatherCard } from "./useWeatherCard";

export interface IWeatherCardProps {
  weatherCardData: IGetWeatherDataResponse;
  citySearchvalue: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: () => void;
  errorHelperText: {
    text: string;
    icon: JSX.Element;
  };
}

export function WeatherCard({
  weatherCardData,
  citySearchvalue,
  handleSubmit,
  errorHelperText,
  onChange,
}: IWeatherCardProps) {
  const { actions, elements, states } = useWeatherCard();
  const [newIcon, setNewIcon] = React.useState<React.JSX.Element>();

  function SetUniqueIcon() {
    if (weatherCardData === undefined) {
      setNewIcon(actions.RandomWeatherIcon());
    }
  }

  React.useEffect(() => {
    SetUniqueIcon();
  }, [weatherCardData]);

  return (
    <div className="weather-card">
      <div className="input-wrapper">
        <input
          className="weather-input"
          placeholder="Your City"
          value={citySearchvalue}
          onChange={(e) => {
            onChange(e);
            // actions.SetLoadingWeather(citySearchvalue);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <button
          className="weather-search"
          onClick={() => {
            handleSubmit();
          }}
          type="submit"
        >
          Search
        </button>
      </div>
      {weatherCardData ? (
        <div className="weather-wrapper">
          <span className="city-name">{weatherCardData.name}</span>
          <div className="temperature">
            <WeatherIcon
              icon={weatherCardData.icon ? weatherCardData.icon : ""}
            />
            <span className="temperature-string">
              {weatherCardData.temp.toString().substring(0, 2)}°
            </span>
          </div>
          <div className="weather-info-wrapper">
            <span className="temp-min-max">
              <b>Min:</b> {weatherCardData.temp_min.toString().substring(0, 2)}°{" "}
              <b>Max:</b> {weatherCardData.temp_max.toString().substring(0, 2)}°
            </span>
            <span className="feels-like">
              <b>Feels Like:</b>{" "}
              {weatherCardData.feels_like.toString().substring(0, 2)}°
            </span>
          </div>
          <div>
            <span className="error-message">
              {errorHelperText.icon}
              {errorHelperText.text}
            </span>
          </div>
        </div>
      ) : (
        <div className="weather-card-nothing">
          {actions.SetLoadingWeather(citySearchvalue) ? (
            <div className="loading-notch">
              <elements.CircleNotch />
            </div>
          ) : (
            <>
              <div className="weather-card-before">{newIcon}</div>
              <div>
                <span className="error-message">
                  {errorHelperText.icon}
                  {errorHelperText.text}
                </span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
