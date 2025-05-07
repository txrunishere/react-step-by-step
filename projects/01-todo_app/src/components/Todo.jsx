import { useRef, useState } from "react";
import Input from "./Input";
import EditInput from "./EditInput";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState(new Set());
  const [todoValue, setTodoValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef(null);

  const handleTodoValue = (e) => {
    setTodoValue(e.target.value);
  };

  const handleEditValue = (e) => {
    setEditValue(e.target.value);
  };

  const handleClick = () => {
    if (todoValue) {
      setTodos([...todos, todoValue]);
      setTodoValue("");
    }
  };

  const handleDelete = (todoToDelete) => {
    setTodos([...todos.filter((todo) => todo !== todoToDelete)]);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setIsEdit(true);
    setEditValue(todos[index]);
  };

  const handleSave = () => {
    if (editValue) {
      todos[editIndex] = editValue;
      setTodos([...todos]);
      setIsEdit(false);
      setEditIndex(null);
    } else {
      setEditValue(todos[editIndex]);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col flex-wrap">
        <h1 className="font-semibold text-3xl mb-[1rem]">Todo App</h1>
        <Input
          todoValue={todoValue}
          handleClick={handleClick}
          handleTodoValue={handleTodoValue}
        />
      </div>
      <div className="border-2 overflow-scroll gap-[10px] overflow-x-hidden p-[20px] h-[30vh] w-[30vw] mt-[1rem] rounded-md">
        <ul className="flex flex-col gap-[10px]">
          {todos.map((todo, index) =>
            isEdit && editIndex === index ? (
              <EditInput
                key={index}
                todo={todo}
                editValue={editValue}
                handleSave={handleSave}
                inputRef={inputRef}
                handleEditValue={handleEditValue}
              />
            ) : (
              <TodoList
                key={index}
                todo={todo}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                index={index}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
