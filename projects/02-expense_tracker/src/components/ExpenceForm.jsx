import { useContext, useId, useState } from "react";
import { BalanceContext } from "../context/BalanceContextProvider";

const ExpenceForm = () => {
  const context = useContext(BalanceContext);
  const [expenseInput, setExpenseInput] = useState("");
  const [amountInput, setAmountInput] = useState(0);
  const [expenseOption, setExpenseOption] = useState("");
  const id = useId();

  const { balanceData, setBalanceData, expenseList, setExpenseList } = context;

  const handleExpenseInput = (e) => {
    setExpenseInput(e.target.value);
  };

  const handleAmountInput = (e) => {
    setAmountInput(e.target.value);
  };

  const handleExpenseOption = (e) => {
    setExpenseOption(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (expenseInput && amountInput && expenseOption) {
      setExpenseList([
        ...expenseList,
        {
          expenseOption: expenseOption,
          expenseField: expenseInput,
          expenseAmount: parseInt(amountInput),
        },
      ]);
    }
    if (expenseOption === "Income") {
      context.setBalanceData({
        ...balanceData,
        balance: balanceData.balance + parseInt(amountInput),
        income: balanceData.income + parseInt(amountInput),
      });
    } else {
      setBalanceData({
        ...balanceData,
        expenses: balanceData.expenses + parseInt(amountInput),
        balance: balanceData.balance - parseInt(amountInput),
      });
    }
  };

  return (
    <div>
      <form className="flex gap-[10px]" onSubmit={handleForm}>
        <input
          className="border-[1.5px] rounded-xl outline-none px-[10px] w-[150px] py-[2px]"
          type="text"
          placeholder="enter Field"
          name="expense_field"
          id="expense_input"
          value={expenseInput}
          onChange={handleExpenseInput}
        />
        <input
          className="border-[1.5px] rounded-xl outline-none px-[10px]  w-[150px] py-[2px]"
          type="number"
          min={0}
          max={100000}
          placeholder="enter Amount"
          name="amount_field"
          id="amount_input"
          value={amountInput}
          onChange={handleAmountInput}
        />
        <input
          type="radio"
          name="expence"
          value="Income"
          id={id + "-income"}
          onChange={handleExpenseOption}
        />
        <label htmlFor={id + "-income"}>Income</label>
        <input
          type="radio"
          name="expence"
          value="Expence"
          id={id + "-expence"}
          onChange={handleExpenseOption}
        />
        <label htmlFor={id + "-expence"}>expence</label>
        <button
          type="submit"
          className="rounded-xl cursor-pointer hover:bg-blue-600 px-2 pt-[2px] pb-[3px] bg-blue-500"
        >
          Add expense
        </button>
      </form>
      {/* {expenseContext.expenseOption} */}
    </div>
  );
};

export default ExpenceForm;
