import { useState, useTransition } from "react"





/**
 * 
 * Without useTransition
 * 
 */

// const UseTransitionHook = () => {
//   const [pending, setPending] = useState(false)

//   const handleClick = async () => {
//     setPending(true)

//     await new Promise((res, rej) => {
//       setTimeout(res, 1000)
//     })

//     console.log('Hello World');
//     setPending(false)
//   }

//   return (
//     <div>
//       <h1>useTransition Hook</h1>
//       <div>
//         <button
//           onClick={handleClick}
//           disabled={pending}
//         >
//           Click
//         </button>
//       </div>
//     </div>
//   )
// }














/**
 * With Transition
 */

const UseTransitionHook = () => {
  const [pending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(async () => {
      await new Promise(res => {
        setTimeout(res, 2300);
      });
    })
  };

  return (
    <div>
      <h1>useTransition Hook</h1>
      <div>
        {
          pending ? (
            <img
              style={{
                width: "200px"
              }}
              src="https://imgs.search.brave.com/8_yoZO6fdCdoa49EjqfGXABmEEbMD0KCmhFGbmQQ5D4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZ2lwaHkuY29t/L21lZGlhL3YxLlky/bGtQVGM1TUdJM05q/RXhhamxzWjNVNE9I/ZDFNemg0YW5FeGNX/WndObTltYkdrMGRt/RnZhM0oxZUdKeGVI/aGhObmwyZFNabGNE/MTJNVjluYVdaelgz/TmxZWEpqYUNaamRE/MW4vZW15U2dXbzBp/QktXcW5pMXdSL2dp/cGh5LmdpZg.gif"
            />
          ) : null
        }<br />
        <button disabled={pending} onClick={handleClick}>
          Click
        </button>
      </div>
    </div>
  );
};



export default UseTransitionHook