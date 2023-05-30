import { useState } from "react";
import "./style.css";

import { usePomodoroCard } from "./usePomodoroCard";

import { IconButton } from "../IconButton";
import { Pause, Play } from "@phosphor-icons/react";

interface IPomodoroCard {
  errorHelperText: {
    text: string;
    icon: JSX.Element;
  };
}

export function PomodoroCard() {
  const { actions, states } = usePomodoroCard();
  const [inputMode, setInputMode] = useState(false);
  const [inputValue, setInputValue] = useState(
    `0${states.minutes}0${states.seconds}`
  );
  const [originalValue, setOriginalValue] = useState(inputValue);

  const handleTimerClick = () => {
    setInputMode(true);
    setInputValue(""); // Reset input value to empty when turning into input mode
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const numbersOnly = value.replace(/[^0-9]/g, "").slice(0, 4); // Keep only the first four numeric characters
    setInputValue(numbersOnly);
  };

  const fixValue = (value: string) => {
    const num = parseInt(value);
    if (!value) {
      return `0000`;
    } else if (num < 10) {
      return `000${num}`;
    } else if (num < 100) {
      return `00${num}`;
    } else if (num < 1000) {
      return `0${num}`;
    } else if (num > 6000) {
      return `60000`;
    } else {
      return value;
    }
  };

  const handleInputBlur = () => {
    setInputMode(false);
    if (inputValue !== originalValue) {
      const formattedValue = fixValue(inputValue);
      setInputValue(formattedValue);
      // Perform any necessary logic with the updated input value
      // For example, extract minutes and seconds and update the timer state.
    } else {
      setInputValue(originalValue);
    }
  };

  return (
    <div className="pomodoro-wrapper">
      <div className="pomodoro-timer" onClick={handleTimerClick}>
        {inputMode ? (
          <input
            type="text"
            className="pomodoro-timer-input"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleInputBlur();
              }
            }}
            autoFocus
          />
        ) : (
          <span className="pomodoro-timer-string">
            {`${inputValue.slice(0, 2)}:${inputValue.slice(2, 4)}`}
          </span>
        )}
      </div>
      <div className="pomodoro-buttons">
        <IconButton
          dynamicClass="pomodoro-play-pause"
          icon={
            !states.startPomodoro ? (
              <Play weight="bold" />
            ) : (
              <Pause weight="bold" />
            )
          }
          btnFunction={actions.handleStartPomodoro}
        />
      </div>
    </div>
  );
}
