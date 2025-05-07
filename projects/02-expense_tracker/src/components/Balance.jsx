const Balance = () => {
  return (
    <section className="flex flex-col flex-wrap gap-[10px]">
      <div>
        <h1 className="text-xl font-semibold">Your Balance</h1>
        <p className="text-sm font-bold font-mono">$ 1200</p>
      </div>
      <div>
        <h1 className="font-semibold">Income</h1>
        <p className="text-sm font-bold font-mono">$ 1700</p>
      </div>
      <div>
        <h1 className="font-semibold">Expensis</h1>
        <p className="text-sm font-bold font-mono">$ 200</p>
      </div>
    </section>
  );
};

export default Balance;
