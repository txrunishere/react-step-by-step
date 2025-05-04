import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0)

  function callOne() {
    console.log("Function Called!!");
  }

  useEffect(() => {
    callOne()
  }, [data]) // isme useEffect page load hone pr call hoga or ja data state me koi change aayega tb call hoga

  return (
    <div>
      <h2>UseEffect Hook</h2>
      <button onClick={() => setCount(p => p + 1)}>Counter {count}</button>
      <button onClick={() => setData(p => p + 1)}>Data Counter {data}</button>
    </div>
  )
}

export default UseEffectHook

// Yaha pr Side Effect hai ki jab bhi count state me change ho rha h component re-render ho rha h or jo hamne function banaya h call one namm se wo fir se call ho rha h jo ek side effect h kiyuki agar component ka kamm aaisa h ki jb website load ho sirf tab load ho to ye function starting me to call hoga pr jb bhi kisi state me change aayega tb bhi call hoga jisse performance me asar hoga


// Here we have two states variable data and count if I change in any state variable then my function will call To solve this problem we write our function in useEffect hook and we pass a dependency array in it will helps us to call the function whenever we change in the states which are present in dependencies array

// If the dependency array is empty so means useEffect will call only one time when website loads