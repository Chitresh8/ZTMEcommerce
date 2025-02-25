//2.Create a button that increments a counter on click.

import React, { useCallback, useEffect, useState } from "react";


const IncrementCounter=()=>{
    const [incrementCount,setIncrementCount]=useState(0);

    let incrementClickHandler=useCallback(()=>{
        setIncrementCount(prevCount=>prevCount+1);
    },[]);

    useEffect(() => {
        console.log("Count has been updated:", incrementCount);
      }, [incrementCount]);
    return <>
    <p>Increment Count only :<button onClick={incrementClickHandler}>Click to Inc</button> {incrementCount}</p></>
};

export default IncrementCounter;

// 2. Build a Simple Counter Component in React
// Problem: Implement a simple counter that increments, decrements, and resets to zero.

// Answer:

// Key Concepts:
// React State Management: Using the useState hook to manage the counter.
// Event Handling: Handling button clicks to modify the state.

// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   const reset = () => setCount(0);

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default Counter;
