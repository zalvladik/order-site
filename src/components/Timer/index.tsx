import { useState, useEffect } from "react";

import Title from "src/components/Title";
import {
  TimerContainer,
  TimerValueContainer,
  TimerValueItem,
  Value,
} from "./styles";

const CountdownTimer = () => {
  const targetDate = new Date("2023-11-05T00:00:00").getTime();

  const calculateTime = () => {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTime = calculateTime();
      setTime(updatedTime);

      if (
        updatedTime.days === 0 &&
        updatedTime.hours === 0 &&
        updatedTime.minutes === 0 &&
        updatedTime.seconds === 0
      ) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TimerContainer>
      <Title sx={{ color: "#FFF", fontSize: "25px" }}>Встигни замовити!</Title>
      <TimerValueContainer>
        <TimerValueItem>
          <Value>{time.days}</Value>д
        </TimerValueItem>
        <TimerValueItem>
          <Value>{time.hours}</Value>г
        </TimerValueItem>
        <TimerValueItem>
          <Value>{time.minutes}</Value>хв
        </TimerValueItem>
        <TimerValueItem>
          <Value>{time.seconds}</Value>сек
        </TimerValueItem>
      </TimerValueContainer>
    </TimerContainer>
  );
};

export default CountdownTimer;
