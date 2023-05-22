import { IGetWeatherDataResponse } from "../../data/getWeatherData";

import "./style.css";

import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudMoon,
  CloudRain,
  CloudSnow,
  CloudSun,
  Lightning,
  Moon,
  MoonStars,
  Rainbow,
  RainbowCloud,
  Snowflake,
  Sun,
  SunHorizon,
  Wind,
} from "@phosphor-icons/react";

import { WeatherIcon } from "../WeatherIcon";
import React from "react";

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

export function RandomWeatherIcon() {
  const icons = [
    <Cloud weight="fill" />,
    <CloudFog weight="fill" />,
    <CloudLightning weight="fill" />,
    <CloudMoon weight="fill" />,
    <CloudRain weight="fill" />,
    <CloudSnow weight="fill" />,
    <CloudSun weight="fill" />,
    <Lightning weight="fill" />,
    <Moon weight="fill" />,
    <MoonStars weight="fill" />,
    <Rainbow weight="fill" />,
    <RainbowCloud weight="fill" />,
    <Snowflake weight="fill" />,
    <Sun weight="fill" />,
    <SunHorizon weight="fill" />,
    <Wind weight="fill" />,
  ];

  const icon = Math.floor(Math.random() * icons.length);

  return icons[icon];
}

export function WeatherCard({
  weatherCardData,
  citySearchvalue,
  handleSubmit,
  errorHelperText,
  onChange,
}: IWeatherCardProps) {
  const [newIcon, setNewIcon] = React.useState<React.JSX.Element>();
  function SetUniqueIcon() {
    if (weatherCardData === undefined) {
      setNewIcon(RandomWeatherIcon());
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
            <span className="humidity">
              <b>Humidity:</b> {weatherCardData.humidity}%
            </span>
            <span className="pressure">
              <b>Pressure:</b> {weatherCardData.pressure}hPa
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
          <div className="weather-card-before">{newIcon}</div>
          <div>
            <span className="error-message">
              {errorHelperText.icon}
              {errorHelperText.text}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
