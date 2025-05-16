import { useId } from "react"

const UseIdHook = () => {
  // const name = useId()
  // const passowrd = useId()
  // const terms = useId()
  // const skills = useId()

  return (
    <div>
      <h1>useId Hook</h1>
      {/* <div>
        <h2 className={name}>{name}</h2>
        <h2 className={passowrd}>{passowrd}</h2>
        <h2 className={terms}>{terms}</h2>
        <h2 className={skills}>{skills}</h2>
      </div> */}

      <InputForm />
    </div>
  )
}



// const InputForm = () => {
//   const id = useId()
//   return (
//     <form>
//       <label htmlFor={id}>Enter Text</label>
//       <input type="text" id={id} placeholder="Enter Name" />
//     </form>
//   )
// }


const InputForm = () => {
  const id = useId()
  return (
    <form>
      <label htmlFor={id + '-text'}>Enter Text </label>
      <input type="text" id={id + '-text'} placeholder="Enter Name" />
      <br />
      <label htmlFor={id + '-username'}>Enter Username </label>
      <input type="text" id={id + '-username'} placeholder="Enter Username" />
      <br />
      <label htmlFor={id + '-password'}>Enter Password </label>
      <input type="text" id={id + '-password'} placeholder="Enter Password" />
      <br />
    </form>
  )
}

export default UseIdHook