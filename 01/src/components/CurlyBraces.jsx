const CurlyBraces = () => {
  const myName = true;
  const name = "peter";
  let x = 10;
  let y = 20;

  const userObj = {
    name: "Kale",
    email: "kale@gmail.com",
    age: 19,
  };

  const usersArr = ["Sola", "Ben", "Denial", "Sonia", "Rex"];

  const path =
    "https://images.unsplash.com/photo-1745669754254-c30c98e5f8b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  function greet(entityName) {
    return `Hello ${entityName}`;
  }

  function operation(a, b, op) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return "Not a valid Operation";
    }
  }

  return (
    <div>
      <h1>{myName && "Not Define"}</h1>
      <h1>{name ? name : "User not Defined"}</h1>
      <p>{x + y}</p>
      <p>{greet("Alex")}</p>
      <p>{operation(20, 10, "-")}</p>
      <h3>{userObj.email}</h3>
      <h3>{userObj.name}</h3>
      <h4>{usersArr[0]}</h4>
      <h4>{usersArr[4]}</h4>
      <img src={path} width={500} />
      <br />
      <input type="text" value={name} className={name} readOnly />
    </div>
  );
};

export default CurlyBraces;
