const JSXExercise = () => {
  const handleClick = () => {
    alert("Hello World");
  }

  return (
    <>
      <h1>Tarun's Todos</h1>
      <img
        width={200}
        src="https://images.unsplash.com/photo-1745669754254-c30c98e5f8b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="photo"
      />
      <ul>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit and.</li>
        <li>Lorem, ipsum.</li>
      </ul>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
};

export default JSXExercise;
