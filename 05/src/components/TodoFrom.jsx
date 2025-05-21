import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlicer";

export default function TodoFrom() {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();

  const handleFrom = (e) => {
    e.preventDefault();
    if (todoValue) {
      dispatch(addTodo(todoValue));
      setTodoValue("");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleFrom}>
        <input
          className="mr-2 outline-none rounded-xl border px-2 py-1"
          type="text"
          placeholder="Enter a Todo"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 rounded-xl px-2 py-1 font-medium"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
