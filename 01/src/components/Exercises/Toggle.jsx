import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <h2>Toggle in React JS</h2>
      <br />
      <button onClick={() => setToggle(x => !x)}>Toggle</button>
      {toggle ? <h1>Hello World</h1> : null}
      {toggle && <h3>Hello World</h3>}
    </>
  );
};

export default Toggle;
