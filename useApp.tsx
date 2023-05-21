import React, { useState } from "react";


export function useApp() {
  
  const [city, setCity] = useState('');
  const [cityActualTemp, setCityActualTemp] = useState('');
  
  async function getCityWeather () {
    const URL = ``
    
    const response = await fetch(URL)

    response.json().then((data) => {
        const main = data.main;
        const tempFull = main.temp.toString();
        const temp = tempFull.split(".")[0];

        setCityActualTemp(temp)
    })
  }

  return {
    states: {
        city, setCity, cityActualTemp, setCityActualTemp
    },
    actions: {
        getCityWeather
    }
  }   
}