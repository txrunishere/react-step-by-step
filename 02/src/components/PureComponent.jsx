
/**
 * Impure Component Example
*/

// let count = 0
// const PureComponent = () => {
//   return (
//     <div>
//       <h1>Pure Component</h1>
//       <Counter />
//       <Counter />
//       <Counter />
//       <Counter />
//     </div>

//   )
// }

// const Counter = () => {
//   count++
//   return (
//     <h1>Count {count}</h1>
//   )
// }















/**
 * Pure Function
*/

const PureComponent = () => {
  return (
    <div>
      <h1>Pure Component</h1>
      <Cup guest={1} />
      <Cup guest={5} />
      <Cup guest={7} />
    </div>
  )
}



const Cup = ({ guest }) => {
  return <p>We have {guest} guest and we have to make {guest} tea's</p>
}


export default PureComponent