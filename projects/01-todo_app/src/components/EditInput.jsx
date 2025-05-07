const EditInput = ({ handleSave, todo, editValue, inputRef, handleEditValue }) => {
  return (
    <li className="flex justify-around items-center">
      <input
        className="outline-none border-2 px-[10px] py-[5px] mr-6 rounded-2xl"
        type="text"
        value={editValue}
        onChange={handleEditValue}
        placeholder={todo}
        ref={inputRef}
      />
      <button className="border-[1.6px] px-[7px] font-semibold rounded-xl" onClick={handleSave}>Save</button>
    </li>
  );
};

export default EditInput;
