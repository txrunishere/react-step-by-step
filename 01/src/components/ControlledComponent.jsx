/*
  Q. What are Controlled Component ?
  Ans. A controlled component is a form whose input value is controlled by React's state
*/

import { useState } from "react"

const ControlledComponent = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div>
      <h1 style={{ margin: "20px 0px" }}>Controlled Component</h1>
      <form>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Name" />
        <br /><br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password" />
        <br /><br />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email" />
        <br />
        <button>Submit</button>
      </form>
      <div style={{
        margin: "20px"
      }}>
        <h3>Name: {name}</h3>
        <h3>Password: {password}</h3>
        <h3>Email: {email}</h3>
      </div>
    </div>
  )
}

export default ControlledComponent