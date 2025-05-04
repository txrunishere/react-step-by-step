import { useEffect } from "react"
import { useState } from "react"

const UseEffectProps = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)

  return (
    <div>
      <h3>UseEffect Props</h3>
      <Counter count={count} data={data} />
      <button onClick={() => setCount(p => p + 1)}>Count</button>
      <button onClick={() => setData(p => p + 1)}>Data</button>
    </div>
  )
}



const Counter = ({ count, data }) => {
  const getCounter = () => {
    console.log("Khelega Free Fire");
  }

  const handleData = () => {
    console.log("Data Called!!");
  }

  useEffect(() => {
    handleData()
  }, [data])

  useEffect(() => {
    getCounter()
  }, [])

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>Data: {data}</h1>
    </>
  )
}

export default UseEffectProps