const LoopMap = () => {
  const tableData = [
    {
      id: 1,
      name: "John",
      email: "john@test.com",
      age: 16
    },
    {
      id: 2,
      name: "Peter",
      email: "peter@test.com",
      age: 38
    },
    {
      id: 3,
      name: "Sam",
      email: "sam@test.com",
      age: 24
    },
    {
      id: 4,
      name: "Parker",
      email: "parker@test.com",
      age: 21
    },
    {
      id: 5,
      name: "Tony",
      email: "tony@test.com",
      age: 19
    },
  ];

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ id, name, email, age }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoopMap;
