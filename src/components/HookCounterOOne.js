// lecture 8 conditonaly run effects

import React, { useState, useEffect } from "react";

function HookCounterOOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `You Clicked ${count} times`;
  }, [count]);
  // [count] for condtionally executing an effect we pass in a second parameter this parameter is an arrray withing this array  we need to specify either props or state that we need to watch for only if those props and states specified in this array were to change the effecct would be exectue, for out example we need the effect to be executed only when the count value changes so withing the array we include count at line 12......i n order to conditonally run the effect the second parameter to useEffect the second parameter is the array of value that the effects depends on if the value don't change between render the effect simply not run.
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOOne;
