import ExpenceList from "./components/ExpenceList";
import Sidebar from "./components/Sidebar/Sidebar";
import BalanceContextProvider from "./context/BalanceContextProvider";

const App = () => {
  return (
    <BalanceContextProvider>
      <div className="flex h-[100vh] p-[20px]">
        <Sidebar />
        <ExpenceList />
      </div>
    </BalanceContextProvider>
  );
};

export default App;
