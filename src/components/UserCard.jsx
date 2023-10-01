import "./UserCard.css";
import UserImg from "../assets/image-jeremy.png";
import { useState } from "react";
import PropTypes from "prop-types";

function UserCard(props) {
  const [time, setTime] = useState("weekly");

  const handleClick = (e) => {
    setTime(e.target.name);
    props.handleName(e.target.name);
    props.handleLocalTime("");
  };

  return (
    <div className="UserCardBox">
      <div className="UserCardBox-UserBox">
        <img src={UserImg} alt="" />
        <div>
          <p>report for</p>
          <h1 className="UserCardBox-UserBox-UserName">jeremy robson</h1>
        </div>
      </div>
      <div className="TimeBox">
        <button
          className={time == "daily" ? "active" : ""}
          name="daily"
          onClick={handleClick}
        >
          daily
        </button>
        <button
          className={time == "weekly" ? "active" : ""}
          name="weekly"
          onClick={handleClick}
        >
          weekly
        </button>
        <button
          className={time == "monthly" ? "active" : ""}
          name="monthly"
          onClick={handleClick}
        >
          monthly
        </button>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  handleName: PropTypes.func,
  handleLocalTime: PropTypes.func,
};

export default UserCard;
