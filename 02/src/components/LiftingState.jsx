import { useState } from "react";

const LiftingState = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h1>Lifting State</h1>
      <Component1 inputValue={inputValue} setInputValue={setInputValue} />
      <Component2 inputValue={inputValue} />
    </div>
  );
};







const Component1 = ({ setInputValue, inputValue }) => {
  return (
    <>
      <h3>Component 1</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Text"
      />
      <hr />
    </>
  );
};







const Component2 = ({ inputValue }) => {
  return (
    <>
      <h3>Component 2</h3>
      <p>{inputValue}</p>
    </>
  );
};


export default LiftingState;
