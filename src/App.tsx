import React from "react";

import "./App.css";

import { Card } from "../src/components/Card";

import { useApp } from "./useApp";
import { WeatherCard } from "./components/WeatherCard";
import { IGetWeatherDataResponse } from "./data/getWeatherData";
import { ClockCard } from "./components/ClockCard";
import { CalendarCard } from "./components/CalendarCard";
import { WarningCircle } from "@phosphor-icons/react";
import { ContactCard } from "./components/ContactCard";
import { AuthorsCard } from "./components/AuthorsCard";
import { MiniCard } from "./components/MiniCard";
import { QotdCard } from "./components/QotDCard";
import { UtilLinksCard } from "./components/UtilLinksCard";

function App() {
  const { actions, states } = useApp();
  return (
    <>
      <div className="all-contents">
        <div className="cards">
          <MiniCard
            cardTitle="Quote of the day"
            dynamicClass="qotd"
            variant="md"
          >
            <QotdCard />
          </MiniCard>
          <MiniCard
            cardTitle="Util links"
            dynamicClass="utils-link"
            variant="sm"
          >
            <UtilLinksCard />
          </MiniCard>
          <Card cardTitle="Calendar" dynamicClass="calendar" variant="sm">
            <CalendarCard />
          </Card>
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
                states.setWheatherData(undefined);
              }}
              errorHelperText={{
                text: states.helperText,
                icon: states.helperText.trim() ? (
                  <WarningCircle size={16} />
                ) : (
                  <></>
                ),
              }}
            />
          </Card>
          <Card cardTitle="Authors" dynamicClass="authors" variant="sm">
            <AuthorsCard />
          </Card>
          <Card cardTitle="Contact" dynamicClass="contact" variant="hmd">
            <ContactCard />
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
