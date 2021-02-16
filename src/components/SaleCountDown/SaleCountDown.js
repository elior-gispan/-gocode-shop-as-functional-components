import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Minutes = 0;
const Seconds = 10;

const SaleCountDown = (props) => {
  const [minutes, setMinutes] = useState(Minutes);
  const [seconds, setSeconds] = useState(Seconds);

  useEffect(() => {
    const intervalID = setInterval(() => {
      let sec = seconds;
      let min = minutes;
      if (sec > 0) {
        sec--;
      } else {
        if (min > 0) {
          min--;
          sec = 59;
        } else {
          props.saleOver();
          clearInterval(intervalID);
        }
      }
      setMinutes(min);
      setSeconds(sec);
    }, 1000);
  }, [minutes, props, seconds]);

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
