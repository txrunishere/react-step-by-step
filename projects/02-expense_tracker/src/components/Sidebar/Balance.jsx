const Balance = ({ balanceData }) => {
  const { balance, income, expenses } = balanceData

  return (
    <section className="flex flex-col flex-wrap gap-[10px]">
      <div>
        <h1 className="text-xl font-semibold">Your Balance</h1>
        <p className="text-sm font-bold font-mono">${balance}</p>
      </div>
      <div>
        <h1 className="font-semibold">Income</h1>
        <p className="text-sm font-bold font-mono">${income}</p>
      </div>
      <div>
        <h1 className="font-semibold">Expenses</h1>
        <p className="text-sm font-bold font-mono">${expenses}</p>
      </div>
    </section>
  );
};

export default Balance;
