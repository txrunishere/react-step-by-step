import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const { setUser } = useContext(UserContext)

  const handleSubmit = () => {
    setUser({
      username: usernameValue,
      password: passwordValue
    })
  };

  return (
    <div>
      <h2>Login</h2>
      <br />
      <input
        type="text"
        placeholder="Enter username"
        value={usernameValue}
        onChange={(e) => setUsernameValue(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
