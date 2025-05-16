const Input = ({ todoValue, handleClick, handleTodoValue }) => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <input
        className="outline-none border-2 px-[10px] py-[5px] mr-6 rounded-2xl"
        type="text"
        placeholder="Enter a Todo"
        name="todo"
        id="todoInput"
        value={todoValue}
        onChange={handleTodoValue}
      />
      <button className="border-[1.6px] px-[7px] py-[3px] font-semibold rounded-xl" onClick={handleClick}>Add Todo</button>
    </div>
  );
};

export default Input;
