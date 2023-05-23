import React, { useState } from "react";

import {
  CircleNotch,
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

export function useWeatherCard() {
  function RandomWeatherIcon() {
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

  const [isWeatherLoading, setIsWeatherLoading] = useState(false);

  function SetLoadingWeather(input: string): boolean {
    if (input.trim().length) {
      return true;
    }
    return false;
  }

  return {
    states: {
      isWeatherLoading,
      setIsWeatherLoading,
    },
    actions: { RandomWeatherIcon, SetLoadingWeather },
    elements: {
      CircleNotch,
    },
  };
}
