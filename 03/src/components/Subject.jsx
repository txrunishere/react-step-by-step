import { useContext } from "react";
import { SubjectData } from "./ContextData";

const Subject = () => {
  const subject = useContext(SubjectData)

  return (
    <div
      style={{
        backgroundColor: "brown",
        color: 'white',
        padding: 20,
      }}
    >
      <h1>Subject: {subject}</h1>
    </div>
  );
};

export default Subject;
