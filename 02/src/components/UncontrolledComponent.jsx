import { useRef } from "react";

const UncontrolledComponent = () => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    console.log(`Name: ${name}, Password: ${password}`);
  };

  const handleFormRef = (e) => {
    e.preventDefault();
    console.log(`Name: ${nameRef.current.value}, Password: ${passwordRef.current.value}`);
  };

  return (
    <div>
      <h1 style={{ margin: "20px 0px" }}>Uncontrolled Component</h1>
      <form id="myForm" name="loginForm" onSubmit={handleForm}>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          autoComplete="username"
        />
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          autoComplete="current-password"
        />
        <br />
        <button>Submit</button>
      </form>

      <hr style={{ margin: "20px 0px" }} />

      <form onSubmit={handleFormRef}>
        <input
          type="text"
          id="nameRef"
          placeholder="Enter your name"
          autoComplete="username"
          ref={nameRef}
        />
        <br />
        <input
          type="password"
          id="passwordRef"
          placeholder="Enter your password"
          autoComplete="current-password"
          ref={passwordRef}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledComponent;
