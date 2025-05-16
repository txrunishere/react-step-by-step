const TodoList = ({ todo, handleDelete, handleEdit, index }) => {
  return (
    <li className="flex justify-around items-center">
      <p>{todo}</p>
      <div className="flex gap-[5px]">
        <button
          className="border-[1.6px] px-[7px] font-semibold rounded-xl"
          onClick={() => handleEdit(index)}
        >
          Edit
        </button>
        <button
          className="border-[1.6px] px-[7px] font-semibold rounded-xl"
          onClick={() => handleDelete(todo)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoList;
