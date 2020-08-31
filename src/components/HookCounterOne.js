// Lecture 7 useEffect After Render

import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  });
  // when we specify useEffect, we are basically requesting react that execute the function that is passed as an argument everytimes the component reneder
  // useEffect runs after every renders of the component

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOne;
