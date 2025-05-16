import { useContext } from "react";
import ExpenceForm from "./ExpenceForm";
import { BalanceContext } from "../context/BalanceContextProvider";

const ExpenceList = () => {
  const context = useContext(BalanceContext)

  return (
    <>
      <section className="w-[85%] flex flex-col gap-[20px] items-center justify-center">
        <ExpenceForm />
        <div className="">
          <main className="border-2 overflow-scroll overflow-x-hidden h-[50vh] w-[50vw] p-[10px]">
            <ul>
              {context.expenseList.map((item, index) => (
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
