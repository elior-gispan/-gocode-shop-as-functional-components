import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const [MINUTES, SECONDS] = [0, 10];

const SaleCountDown = ({ saleOver }) => {
  const [minutes, setMinutes] = useState(MINUTES);
  const [seconds, setSeconds] = useState(SECONDS);

  useEffect(() => {
    let sec;
    let min;
    const intervalId = setInterval(() => {
      console.log("min: ", min);
      console.log("minutes: ", minutes);
      console.log("sec: ", sec);
      console.log("seconds: ", seconds);
      console.log("IntervalId: ", intervalId);
      sec = seconds;
      min = minutes;
      if (sec > 0) {
        sec--;
      } else if (min > 0) {
        min--;
        sec = 59;
      } else {
        saleOver();
        clearInterval(intervalId);
      }
      setMinutes(min);
      setSeconds(sec);
    }, 1000);
  }, [minutes, saleOver, seconds]);

  return (
    <div className="sale-component">
      {minutes === 0 && seconds === 0
        ? "The SALE is over"
        : `${minutes}:${("00" + seconds).slice(-2)} lefts to the SALE...`}
    </div>
  );
};

SaleCountDown.propTypes = {
  saleOver: PropTypes.func,
};

export default SaleCountDown;
