import { useState } from "react";

const MultiCondition = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Multiple Condition in REACT</div>
      <p>{count}</p>
      <button onClick={() => setCount(p => p + 1)}>Counter</button>
      {
        count == 0 ? (
          <h1>Condition 1</h1>
        ) : count == 1 ? (
          <h1>Condition 2</h1>
        ) : count <= 10 ? (
          <h1>Condition 3</h1>
        ) : <h2>Not Valid</h2>
      }
    </>
  );
};

export default MultiCondition;
