import { forwardRef, useRef } from "react";

const ForwardRef = () => {
  const inputRef = useRef(null);

  const handleInput = () => {
    inputRef.current.value = 200;
    inputRef.current.focus();
    inputRef.current.style.color = 'red'
  };

  return (
    <div>
      <h1 style={{ margin: "20px 0px" }}>Forward Ref</h1>
      <div>
        <UserInput
          ref={inputRef}
          id="textInput"
          name="textInput"
          type="text"
          placeholder="Enter text"
        />
        <button onClick={handleInput}>Update Input</button>
      </div>
    </div>
  );
};









// approach we use in react 19 version

const UserInput = (props) => {
  return (
    <div>
      <input {...props}  ref={props.ref}/>
    </div>
  )
}









// before 19 version

// const UserInput = forwardRef((props, ref) => {
//   return (
//     <div>
//       <input ref={ref} {...props} />
//     </div>
//   );
// });

export default ForwardRef;
