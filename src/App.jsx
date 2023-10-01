import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import UserCard from "./components/UserCard";
import { data } from "./data";

function App() {
  const [time, setTime] = useState("weekly");
  const [localTime, setLocalTime] = useState("");

  const handleClick = (data) => {
    setTime(data);
  };

  const handleLocalTime = (localTime) => {
    setLocalTime(localTime);
  };

  return (
    <main>
      <div className="UserBox">
        <UserCard handleName={handleClick} handleLocalTime={handleLocalTime} />
      </div>
      {data.map((el, i) => (
        <Card
          key={i}
          {...el}
          time={time}
          localTime={localTime}
          handleLocalTime={handleLocalTime}
        />
      ))}
    </main>
  );
}

export default App;
