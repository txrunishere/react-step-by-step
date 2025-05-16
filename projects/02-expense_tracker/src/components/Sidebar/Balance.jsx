import { useContext } from "react";
import { BalanceContext } from "../../context/BalanceContextProvider";

const Balance = () => {
  const context = useContext(BalanceContext)

  return (
    <section className="flex flex-col flex-wrap gap-[10px]">
      <div>
        <h1 className="text-xl font-semibold">Your Balance</h1>
        <p className="text-sm font-bold font-mono">₹ {context.balanceData.balance}</p>
      </div>
      <div>
        <h1 className="font-semibold">Income</h1>
        <p className="text-sm font-bold font-mono">₹ {context.balanceData.income}</p>
      </div>
      <div>
        <h1 className="font-semibold">Expenses</h1>
        <p className="text-sm font-bold font-mono">₹ {context.balanceData.expenses}</p>
      </div>
    </section>
  );
};

export default Balance;
