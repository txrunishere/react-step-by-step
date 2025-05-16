import { useState } from "react";

const RadioButton = () => {
  const [gender, setGender] = useState("Male");

  return (
    <div style={{ marginBottom: "20px" }}>
      <h1>Handle Radio Button in React JS</h1>
      <br />
      <h3 style={{ marginBottom: "20px" }}>User Gender: {gender}</h3>
      <div>
        <input
          type="radio"
          onChange={e => setGender(e.target.value)}
          id="male"
          value="Male"
          name="gender"
          checked={gender === "Male"}
        />
        <label htmlFor="male">Male</label>
        <br />
        <input
          type="radio"
          onChange={e => setGender(e.target.value)}
          id="female"
          value="Female"
          name="gender"
          checked={gender === "Female"}
        />
        <label htmlFor="female">Female</label>
      </div>
    </div>
  );
};

export default RadioButton;
