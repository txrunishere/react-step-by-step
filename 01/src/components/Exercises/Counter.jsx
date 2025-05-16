import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(p => p + 1)
  }

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleCount}>Increase</button>
    </div>
  )
}

export default Counter