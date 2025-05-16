import { useState } from "react";

// const DerivedState = () => {
//   const [count, setCount] = useState(0)
//   let num = count
//   console.log(count, num);
//   return (
//     <div>
//       <h1>Derived State</h1>
//       <p>Count: {count}</p>
//       <p>Num: {num}</p>
//       <button onClick={() => setCount(p => p + 1)}>+</button>
//     </div>
//   )
// }









const DerivedState = () => {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState("");

  let totalNames = names.length 
  let lastName = names[names.length - 1]
  let uniqueNames = [...new Set(names)].length

  const handleNames = () => {
    setNames([...names, inputValue])
    setInputValue('')
  };

  const handleInput = e => {
    if (e.target.value) {
      setInputValue(e.target.value)
    }
  }

  return (
    <div>
      <h1>Derived State</h1>
      <h2>Total User: {totalNames}</h2>
      <h2>Last User: {lastName}</h2>
      <h2>Unique Users: {uniqueNames}</h2>
      <br />
      <div>
        <input
          value={inputValue}
          onChange={handleInput}
          id="nameInput"
          name="name"
          autoComplete="username"
          type="text"
          placeholder="Enter Name"
        />
        <button
          onClick={handleNames}
        >
          Add
        </button>
        {
          names.map((name, index) => (
            <h4 key={index}>{name}</h4>
          ))
        }
      </div>
    </div>
  );
};

export default DerivedState;
