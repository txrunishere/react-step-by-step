import { useEffect, useRef, useState } from "react"

const UseRefHook = () => {
  const inputRef = useRef(null)

  const focusInput = () => {
    // inputRef.current.focus()
    // inputRef.current.select()
    // inputRef.current.style.color = 'red'
    inputRef.current.value = 'You are Hacked...'
  }

  return (
    <div>
      <h1>useRef Hook</h1>
      <input ref={ inputRef } type="text" placeholder="Enter a text" />
      <button onClick={focusInput}>Jaldi Focus Karo</button>
    </div>
  )
}




export const StopWatch = () => {
  const count = useRef(null)
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    count.current = setInterval(() => {
      setTimer(p => p + 1)
    }, 1000);

    return () => clearInterval(count.current)
  }, [])

  return (
    <>
      <h1>{timer}</h1>
      <button onClick={() => clearInterval(count.current)}>Stop</button>
      <button onClick={() => setTimer(0)}>Restart</button>
    </>
  )
}

export default UseRefHook