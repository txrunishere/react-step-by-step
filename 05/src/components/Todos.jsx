import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlicer";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <div className="h-[300px] w-[400px] border overflow-auto mt-3 rounded-lg p-[10px]">
        <div className="text-center font-medium text-xl underline">Todos</div>
        <ul>
          {todos.map((todo) => (
            <li className="flex justify-between my-1" key={todo.id}>
              <p>{todo.task}</p>
              <button className="bg-blue-400 rounded-full px-2 py-1" onClick={() => handleDelete(todo.id)}>Delete Todo</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
