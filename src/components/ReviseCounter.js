import React, { useState, useEffect } from "react";

function ReviseCounter() {
  const [count, setCount] = useState(0);
  useEffect(() =>{
    document.title=`You Cliked ${count} times`
  })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}times re</button>
    </div>
  )
}

export default ReviseCounter
