import { useState } from "react";
import ExpenceForm from "./ExpenceForm";

const ExpenceList = () => {
  const [expenseList, setExpenseList] = useState([])

  return (
    <>
      <section className="w-[85%] flex flex-col gap-[20px] items-center justify-center">
        <ExpenceForm expenseList={expenseList} setExpenseList={setExpenseList} />
        <div className="">
          <main className="border-2 overflow-scroll overflow-x-hidden h-[50vh] w-[50vw] p-[10px]">
            <ul>
              {expenseList.map((item, index) => (
                <li key={index}>
                  <span className="text-2xl">{item.expenseField}</span>
                  <br />
                  <span className="ml-[20px]">
                    ₹ {item.expenseAmount} |{" "}
                    <span
                      style={{
                        color: item.expenseOption == "Income" ? "green" : "red",
                      }}
                    >
                      {item.expenseOption}
                    </span>
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
