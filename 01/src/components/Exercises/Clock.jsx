import { useEffect, useState } from "react";

const Clock = () => {
  const [color, setColor] = useState("yellow");

  const handleClockColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <h2>Digital Clock</h2>
      <ColorDropdown color={color} handleClockColor={handleClockColor} />
      <Timer color={color} />
    </div>
  );
};





const ColorDropdown = ({ color, handleClockColor }) => {
  return (
    <div>
      <select onChange={handleClockColor} defaultValue={color}>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
};





const Timer = ({ color }) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer)
  }, []);

  return (
    <div>
      <h2 style={{ color: color }}>{currentTime}</h2>
    </div>
  );
};

export default Clock;
