// const State = () => {

//   // problem in variables is that when we change value of a variable it don't change dynamically and component not re-render

//   let fruit = "Apple";

//   const changeName = () => {
//     fruit = "Banana"
//     console.log(fruit);
//   }

//   return (
//     <>
//       <h1>{fruit}</h1>
//       <button onClick={changeName}>Change Name</button>
//     </>
//   );
// };














// Now, use of state or useState hook

import { useState } from 'react'

const State = () => {
  const [fruit, setFruit] = useState('Apple')

  return (
    <div>
      <h2>State in React JS</h2>
      <p>{fruit}</p>
      <button onClick={() => setFruit('Banana')}>Change Fruit</button>
    </div>
  )
}


export default State;

// state is main about re-render when there is any change in state component re-render's
