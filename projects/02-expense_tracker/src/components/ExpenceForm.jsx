import { useId } from "react";

const ExpenceForm = () => {
  const id = useId();

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="flex gap-[10px]" onSubmit={handleForm}>
        <input
          className="border-[1.5px] rounded-xl outline-none px-[10px] w-[150px] py-[2px]"
          type="text"
          placeholder="Enter Field"
          name="expense_field"
          id="expense_input"
        />
        <input
          className="border-[1.5px] rounded-xl outline-none px-[10px]  w-[150px] py-[2px]"
          type="text"
          placeholder="Enter Amount"
          name="amount_field"
          id="amount_input"
        />
        <input type="radio" name="expence" value="income" id={id + "-income"} />
        <label htmlFor={id + "-income"}>Income</label>
        <input
          type="radio"
          name="expence"
          value="expence"
          id={id + "-expence"}
        />
        <label htmlFor={id + "-expence"}>Expence</label>
        <button
          type="submit"
          className="rounded-xl cursor-pointer hover:bg-blue-600 px-2 pt-[2px] pb-[3px] bg-blue-500"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenceForm;
