import ExpenceForm from "./ExpenceForm";

const ExpenceList = () => {
  return (
    <>
      <section className="w-[85%] flex flex-col gap-[20px] items-center justify-center">
        <ExpenceForm />
        <div className="">
          <main className="border-2 overflow-scroll overflow-x-hidden h-[50vh] w-[50vw] p-[10px]">
            List
          </main>
        </div>
      </section>
    </>
  );
};

export default ExpenceList;
