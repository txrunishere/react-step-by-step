import ExpenceForm from "./ExpenceForm";

const ExpenceList = ({
  expenseList,
  expenseInput,
  handleExpenseInput,
  amountInput,
  handleAmountInput,
  handleExpenseOption,
  handleForm
}) => {
  return (
    <>
      <section className="w-[85%] flex flex-col gap-[20px] items-center justify-center">
        <ExpenceForm
          expenseData={{
            expenseList,
            expenseInput,
            amountInput,
            handleExpenseInput,
            handleAmountInput,
            handleExpenseOption,
            handleForm
          }}
        />
        <div className="">
          <main className="border-2 overflow-scroll overflow-x-hidden h-[50vh] w-[50vw] p-[10px]">
            <ul>
              {expenseList.map((item, index) => (
                <li key={index}>
                  <span className="text-2xl">{item.expenseField}</span><br />
                  <span className="ml-[20px]">
                    $ {item.expenseAmount} | <span style={{
                      color: item.expenseOption == "Income" ? "green" : "red"
                    }}>{item.expenseOption}</span>
                  </span>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </section>
    </>
  );
};

export default ExpenceList;
