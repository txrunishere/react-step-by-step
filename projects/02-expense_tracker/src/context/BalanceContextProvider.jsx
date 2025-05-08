import { createContext, useState } from "react";

export const BalanceContext = createContext(null);

const BalanceContextProvider = ({ children }) => {
  const [balanceData, setBalanceData] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });
  const [expenseList, setExpenseList] = useState([])

  return (
    <BalanceContext.Provider value={{ balanceData, expenseList, setBalanceData, setExpenseList }}>
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceContextProvider;
