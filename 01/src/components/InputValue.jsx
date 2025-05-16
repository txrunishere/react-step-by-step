import { useState } from "react"

const InputValue = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setValue('')}>CLEAR PAD</button>
      <p>{value}</p>
    </div>
  )
}

export default InputValue