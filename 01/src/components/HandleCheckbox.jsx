import { useState } from "react"

const HandleCheckbox = () => {
  const [skills, setSkills] = useState([])

  const handleCheck = e => {
    if (e.target.checked) {
      setSkills([...skills, e.target.value])
    } else {
      setSkills([...skills.filter(skill => skill !== e.target.value)])
    }
  }

  console.log(skills);

  return (
    <>
      <h1>Handle CheckBox in React</h1>
      <div style={{ margin: "20px" }}>
        <h3 style={{margin: "10px 0px"}}>Select Your Skills</h3>

        <input onChange={handleCheck} type="checkbox" id="php" value="PHP" />
        <label htmlFor="php">PHP</label><br />

        <input onChange={handleCheck} type="checkbox" id="js" value="JS" />
        <label htmlFor="js">JS</label><br />

        <input onChange={handleCheck} type="checkbox" id="rust" value="RUST" />
        <label htmlFor="rust">RUST</label><br />
        <h1>{skills.toString()}</h1>
      </div>
    </>
  )
}







export const Information = () => {
  const [users, setUsers] = useState([
    {
      name: "John",
      age: 18
    },
    {
      name: "Sam",
      age: 20
    },
    {
      name: "Sola",
      age: 12
    },
    {
      name: "Peter",
      age: 30
    }
  ])

  const deleteUser = (username) => {
    setUsers([...users.filter(user => user.name !== username)])
  }

  console.log(users);

  return (
    <div>
      {
        users.map(({name, age}) => (
          <div key={name}>
            <h2>{name}</h2>
            <button onClick={() => deleteUser(name)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}



export default HandleCheckbox