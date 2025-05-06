import { useState } from "react";
import College from "./components/College";
import { SubjectData } from "./components/ContextData";

const App = () => {
  const [option, setOption] = useState("English")

  return (
    <SubjectData.Provider value={option}>
      <div
        style={{
          backgroundColor: "purple",
          padding: 20,
        }}
      >
        <h1>Context API</h1>
        <select onChange={e => setOption(e.target.value)} defaultValue={option}>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Maths">Maths</option>
        </select>
        <button onClick={() => setOption('')}>Clear Subject</button>
        <College />
      </div>
    </SubjectData.Provider>
  );
};

export default App;
