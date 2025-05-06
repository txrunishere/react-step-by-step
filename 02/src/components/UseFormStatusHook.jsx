import { useFormStatus } from 'react-dom'

const UseFormStatusHook = () => {

  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 3000))
    console.log("Submit")
  }

  return (
    <div>
      <h2>useFormStatus Hook in React</h2>
      <form action={handleSubmit}>
        <FormInput />
      </form>
    </div>
  )
}








const FormInput = () => {
  const { pending } = useFormStatus()
  console.log(pending);
  return (
    <div>
      <input id="nameInput" type="text" placeholder="Enter Name" />
      <input
        id="passwordInput"
        type="text"
        placeholder="Enter Password"
      />
      <button disabled={pending}>{ pending ? "Submitting..." : "Submit" }</button>
    </div>
  );
};



export default UseFormStatusHook