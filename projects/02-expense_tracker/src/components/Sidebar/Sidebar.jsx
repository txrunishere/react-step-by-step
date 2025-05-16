import Balance from "./Balance";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    <div className="w-[15%] flex flex-col justify-between border-r-2 h-full p-[1rem]">
      <Balance />
      <Profile />
    </div>
  );
};

export default Sidebar;
