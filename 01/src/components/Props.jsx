import { useState } from "react"

const Props = () => {
  let userObj = {
    name: "John",
    age: 18,
    email: "john@test.com"
  }

  let userArr = ['John', 18, 'john@test.com']

  const [studentName, setStudentName] = useState('sam')

  const handleClick = () => {
    setStudentName('pablo')
  }

  return (
    <>
      <h1>Props in REACT JS</h1>
      <Student name={studentName} handleClick={handleClick} />
      <User info={ userObj } user={ userArr } />
      <Employee />
      <Wrapper color="orange">Hello World</Wrapper>
      <Wrapper color="pink">Learn React</Wrapper>
      <Wrapper color="lightblue">Build Projects</Wrapper>
    </>
  )
}








const Wrapper = ({ children, color = "black" }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        width: "300px",
        border: "2px solid white",
        marginBottom: 15,
        color: color
      }}
    >
      <h1>{children}</h1>
    </div>
  )
}






const Employee = ({ name = "User" }) => {
  return <p style={{
    padding: "20px 0px"
  }}>
    { name }
  </p>
}






const Student = ({ name, handleClick }) => {
  return (
    <>
      <div style={{
        padding: "30px 0px"
      }}>
        <p>Student Name: {name}</p>
        <button onClick={handleClick}>Change Name</button>
      </div>
    </>
  )
}






const User = ({ info, user }) => {
  return (
    <>
      <div>User: {info.email}</div>
      <p>{user}</p>
    </>
  )
}


export default Props