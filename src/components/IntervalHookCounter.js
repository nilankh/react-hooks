// Lecture 11 useEffect with incorrect dependency
import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    // setCount(count + 1);
    // ye v kr skte h agar ap line 16 dependency ni hona chahte h toa
    setCount((prevCount) => prevCount + 1);
  };

  //   function doSomething() {
  //       console.log(someProp)
  //   }
  useEffect(() => {
    function doSomething() {
      console.log("someProp");
    }
    doSomething();
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
    //   }, [count]); alwyas think before specifying empty dependency array
//   }, [someProp]);
  }, []);

  return <div>{count}</div>;
}

export default IntervalHookCounter;
