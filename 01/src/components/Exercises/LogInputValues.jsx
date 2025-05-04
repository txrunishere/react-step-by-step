import { useState } from "react"

const LogInputValues = () => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')

  const logValues = () => {
    console.table(["Value 1 is: " + value1,"Value 2 is: " + value2,"Value 3 is: " + value3]);
  }

  return (
    <div>
      <input
        type="text"
        value={value1}
        placeholder="Enter For Value 1"
        onChange={(e) => setValue1(e.target.value)}
      />
      <input
        type="text"
        value={value2}
        placeholder="Enter For Value 2"
        onChange={(e) => setValue2(e.target.value)}
      />
      <input
        type="text"
        value={value3}
        placeholder="Enter For Value 3"
        onChange={(e) => setValue3(e.target.value)}
      />

      <button onClick={logValues}>Log Input Values</button>
    </div>
  )
}

export default LogInputValues