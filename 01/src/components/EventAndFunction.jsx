const fruit = () =>  {
  alert("Apple");
}

const EventAndFunction = () => {
  function greet() {
    alert("Simple Function Called...")
  }

  const arrow = () => {
    alert("Arrow Function")
  }

  const greetWithName = name => {
    alert(`Function with Params, Hello ${name}`)
  }

  // function fruit() {
  //   alert("Apple");
  // }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={greet}>Simple Function</button>
      <br />
      <button onClick={arrow}>Arrow Function</button>
      <br />
      <button onClick={() => greetWithName('SAM')}>Function with Params</button>
      <br />
      <button onClick={fruit}>Fruit</button>
    </div>
  )
}

export default EventAndFunction