import React, { useState, createContext } from "react";
import "../plannerPomo.css";

// Sending props to other components
export const TimeContext = createContext();

export const TimeProvider = (props) => {
  const [currentProgress, setCurrentProgress] = useState({
    currIndex: 1,
  });

  const [timer, setTimer] = useState({
    session: 2700,
    break: 300,
    mode: "session",
    time: { currentTime: 2700, startingTime: 300 },
    active: false,
    name: "Pomodoro Timer",
    progress: 0,
  });

  return (
    <TimeContext.Provider
      value={[timer, setTimer, currentProgress, setCurrentProgress]}>
      {props.children}
    </TimeContext.Provider>
  );
};
