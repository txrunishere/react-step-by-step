import { useEffect } from "react"
import { useState } from "react"

const ComponentLifeCycle = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)
  const [display, setDisplay] = useState(true)

  return (
    <div>
      <h2>Component LifeCycle</h2>
      <button onClick={() => setCount(p => p + 1)}>Update Counter</button>
      <button onClick={() => setData(p => p + 1)}>Update Data</button>
      <button onClick={() => setDisplay(x => !x)}>Toggle</button> { /* When we Toggle it Counter component re-mount */ }
      {display ? <Counter count={count} data={data} /> : null}
    </div>
  )
}




const Counter = ({ count, data }) => {
  const handleStates = () => {
    console.log("Hello World");
  }

  // Example of Mounting a Component
  useEffect(() => {
    handleStates()

    // return () => {
    //   console.log("Un-mount");
    // }
  }, [])


  // Example of updating Component
  useEffect(() => {
    console.log("Updating Phase");
  }, [count, data])


  // Example of Unmounting Component
  useEffect(() => {
    return () => {
      console.log("un-mount Phase");
    }
  }, [])

  return (
    <div>
      <h4>Counter: {count}</h4>
      <h4>Data: {data}</h4>
    </div>
  )
}


export default ComponentLifeCycle