import { useState } from "react";
import TodoFrom from "./components/TodoFrom";
import Todos from "./components/Todos";

export default function App() {
  return (
    <>
      <div>
        <TodoFrom  />
        <Todos  />
      </div>
    </>
  );
}
