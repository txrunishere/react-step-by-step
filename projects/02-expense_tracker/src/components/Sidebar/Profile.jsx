const Profile = () => {
  return (
    <div className="flex flex-wrap justify-around">
      <img
        className="w-[50px] rounded-full mr-[40px]"
        src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
        alt=""
      />
      <div className="flex items-center">
        <button className="rounded-xl px-2 py-1 cursor-pointer hover:bg-blue-600 bg-blue-500">Sign out</button>
      </div>
    </div>
  );
};

export default Profile;
