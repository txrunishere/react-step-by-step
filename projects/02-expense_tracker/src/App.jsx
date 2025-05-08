import { useState, createContext } from "react";
import ExpenceList from "./components/ExpenceList";
import Sidebar from "./components/Sidebar/Sidebar";

// {
//   expenseOption: Income || Expense;
//   fieldValue: expense_input;
//   amountValue: amount_input
// }

const App = () => {
  const [expenseList, setExpenseList] = useState([
    {
      expenseOption: "Income",
      expenseField: "Plumber",
      expenseAmount: "20",
    },
  ]);
  const [expenseInput, setExpenseInput] = useState("");
  const [amountInput, setAmountInput] = useState(0);
  const [expenseOption, setExpenseOption] = useState("");
  const [balanceData, setBalanceData] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });

  const handleForm = (e) => {
    e.preventDefault();
    if (expenseInput && amountInput && expenseOption) {
      setExpenseList([
        ...expenseList,
        {
          expenseOption: expenseOption,
          expenseField: expenseInput,
          expenseAmount: amountInput,
        },
      ]);
    }
    
  };

  console.table([expenseInput, amountInput, expenseOption]);

  const handleExpenseInput = (e) => {
    setExpenseInput(e.target.value);
  };

  const handleAmountInput = (e) => {
    setAmountInput(e.target.value);
  };

  const handleExpenseOption = (e) => {
    setExpenseOption(e.target.value);
  };

  return (
    <div className="flex h-[100vh] p-[20px]">
      <Sidebar balanceData={balanceData} />
      <ExpenceList
        handleForm={handleForm}
        expenseList={expenseList}
        expenseInput={expenseInput}
        handleExpenseInput={handleExpenseInput}
        amountInput={amountInput}
        handleAmountInput={handleAmountInput}
        handleExpenseOption={handleExpenseOption}
      />
    </div>
  );
};

export default App;
