import "./Card.css";
import PropTypes from "prop-types";
import { useState } from "react";

function Card(props) {
  const [btns, setBtns] = useState(false);
  const [localTime, setLocalTime] = useState("");

  const handleClick = () => {
    setBtns((prev) => !prev);
  };

  const handleLocal = (e) => {
    setBtns((prev) => !prev);
    setLocalTime(e.target.name);
    props.handleLocalTime(e.target.name);
    console.log(localTime);
  };

  return (
    <div className={`Card Card${props.title}`}>
      <div className="Card-CardInfo">
        <div className="Card-CardInfo-Container">
          <p className="Card-CardInfo-Container-CardType">{props.title}</p>
          <button
            className={
              btns
                ? "Card-CardInfo-Container-Btn showBtn"
                : "Card-CardInfo-Container-Btn"
            }
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {btns && (
            <div className="Card-CardInfo-Container-BtnsBox">
              <button name="daily" onClick={handleLocal}>
                daily
              </button>
              <button name="weekly" onClick={handleLocal}>
                weekly
              </button>
              <button name="monthly" onClick={handleLocal}>
                monthly
              </button>
            </div>
          )}
        </div>
        <div className="Card-CardInfo-HoursBox">
          <h1 className="Card-CardInfo-Hours">
            {props.localTime
              ? props.timeframes[props.localTime].current
              : props.timeframes[props.time].current}
            hrs
          </h1>
          <p className="Card-CardInfo-Prev">
            {props.localTime == "daily"
              ? "Yesterday"
              : props.localTime == "monthly"
              ? "Last month"
              : props.localTime == "weekly"
              ? "Last Week"
              : props.time == "daily"
              ? "Yesterday"
              : props.time == "monthly"
              ? "Last Month"
              : "Last week"}
            {" - "}
            {props.localTime
              ? props.timeframes[props.localTime].previous
              : props.timeframes[props.time].previous}
            hrs
          </p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  time: PropTypes.string,
  title: PropTypes.string,
  timeframes: PropTypes.object,
  localTime: PropTypes.string,
  handleLocalTime: PropTypes.func,
};

export default Card;
