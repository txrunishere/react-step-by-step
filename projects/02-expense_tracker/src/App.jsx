import { useState, createContext } from "react";
import ExpenceList from "./components/ExpenceList";
import Sidebar from "./components/Sidebar/Sidebar";
import BalanceContextProvider from "./context/BalanceContextProvider";

const App = () => {
  const [balanceData, setBalanceData] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });

  return (
    <BalanceContextProvider values={{balanceData, setBalanceData}}>
      <div className="flex h-[100vh] p-[20px]">
        <Sidebar balanceData={balanceData} />
        <ExpenceList />
      </div>
    </BalanceContextProvider>
  );
};

export default App;
