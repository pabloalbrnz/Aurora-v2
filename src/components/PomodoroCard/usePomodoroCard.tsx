import { useState, useEffect } from "react";

export function usePomodoroCard() {
  const [minutes, setMinutes] = useState(0);
  const [startPomodoro, setStartPomodoro] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const [errorHelperText, setErrorHelperText] = useState({});

  function handleStartPomodoro() {
    setStartPomodoro(false);
    if (minutes !== 0) {
      setStartPomodoro(true);
    } else {
      setErrorHelperText({
        text: "Insert a value to Pomodoro starts",
      });
    }
  }

  function handlePausePomodoro() {
    setStartPomodoro(false);
    setMinutes(minutes), setSeconds(seconds);
  }

  function pomodoroTimer() {
    if (startPomodoro) {
      let interval = setInterval(() => {
        clearInterval(interval);

        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }

  useEffect(() => {
    pomodoroTimer();
  }, [seconds, startPomodoro]);

  return {
    states: {
      minutes,
      setMinutes,
      seconds,
      setSeconds,
      startPomodoro,
      setStartPomodoro,
      errorHelperText,
    },
    actions: {
      handleStartPomodoro,
      handlePausePomodoro,
    },
  };
}
