import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../features/todo/todoSlicer";
import { useState } from "react";

export default function Todos() {
  const [todoValue, setTodoValue] = useState("");
  const [index, setIndex] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id) => {
    setIndex(id);
  };

  const handleSave = () => {
    dispatch(editTodo({
      id: index,
      task: todoValue
    }))
    setTodoValue('')
    setIndex(null)
  }

  return (
    <>
      <div className="h-[300px] w-[400px] border overflow-auto mt-3 rounded-lg p-[10px]">
        <div className="text-center font-medium text-xl underline">Todos</div>
        <ul>
          {todos.map((todo) => (
            <li className="flex justify-between my-[6px]" key={todo.id}>
              {todo && index === todo.id ? (
                <>
                  <input
                    className="mr-2 outline-none rounded-xl border px-2 py-1"
                    placeholder={todo.task}
                    value={todoValue}
                    onChange={(e) => setTodoValue(e.target.value)}
                    type="text"
                  />
                  <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 rounded-full px-2 py-1">
                    Save
                  </button>
                </>
              ) : (
                <>
                  <p>{todo.task}</p>
                  <div className="flex gap-1">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 rounded-full px-2 py-1"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Delete Todo
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 rounded-full px-2 py-1"
                      onClick={() => handleEdit(todo.id)}
                    >
                      Edit Todo
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
