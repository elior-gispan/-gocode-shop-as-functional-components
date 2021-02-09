import React from "react";
import PropTypes from "prop-types";

const Minutes = 0;
const Seconds = 5;

class SaleCountDown extends React.Component {
  state = {
    minutes: Minutes,
    seconds: Seconds,
  };

  componentDidMount() {
    const intervalID = setInterval(() => {
      const { minutes, seconds } = this.state;
      let sec = seconds;
      let min = minutes;
      if (sec > 0) {
        sec--;
      } else {
        if (min > 0) {
          min--;
          sec = 59;
        } else {
          this.props.saleOver();
          clearInterval(intervalID);
        }
      }
      this.setState({ minutes: min, seconds: sec });
    }, 1000);
  }

  render() {
    return (
      <div className="sale-component">
        {this.state.minutes === 0 && this.state.seconds === 0
          ? "The SALE is over"
          : `${this.state.minutes}:${("00" + this.state.seconds).slice(
              -2
            )} lefts to the SALE...`}
      </div>
    );
  }
}

SaleCountDown.propTypes = {
  saleOver: PropTypes.func,
};

export default SaleCountDown;
