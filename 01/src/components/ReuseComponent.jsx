const ReuseComponent = () => {
  const users = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
    { id: 4, name: "Diana", age: 28, email: "diana@example.com" },
    { id: 5, name: "Eve", age: 35, email: "eve@example.com" },
  ];

  return <div>
    {
      users.map(({age, email, id, name}) => (
        <User key={id} info={{age, email, name}} />
      ))
    }
  </div>
};










const User = ({ info }) => {
  return (
    <div style={{marginBottom: "20px"}}>
      Name: {info.name}<br />
      Age: {info.age}<br />
      Email: {info.email}
    </div>
  )
}


export default ReuseComponent;
