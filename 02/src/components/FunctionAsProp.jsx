const FunctionAsProp = () => {
  const names = ['Tarun', "John", 'Peter', 'Bruce']

  const handleClick = (name) => {
    alert("Hello " + name)
  }

  return (
    <>
      <div>Function As Prop</div>
      <div>
        {
          names.map((name, index) => (
            <User key={index} handleClick={handleClick} name={name} />
          ))
        }
      </div>
    </>
  )
}


/*
  We can't pass events as props
*/


/**
 * Interview Question
 * Q. Why we write functions in parent component and pass it as props in other components
 * Ans. If we declare functions in components and we use that component in several places than every time we use component that function repeat
*/


const User = ({ handleClick, name }) => {
  return (
    <>
      <button onClick={() => handleClick(name)}>Click ME!</button><br />
    </>
  )
}


export default FunctionAsProp