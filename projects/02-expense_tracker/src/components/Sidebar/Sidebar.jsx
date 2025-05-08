import Balance from "./Balance";
import Profile from "./Profile";

const Sidebar = ({ balanceData }) => {
  return (
    <div className="w-[15%] flex flex-col justify-between border-r-2 h-full p-[1rem]">
      <Balance balanceData={balanceData} />
      <Profile />
    </div>
  );
};

export default Sidebar;
