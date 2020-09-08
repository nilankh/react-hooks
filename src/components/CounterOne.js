// Lecture 19 useReducer(simple state and action)

import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  // similar to useState useReducer returns also a pair of value which  we can get hold off array D strcutuing syntax, useReducer returns the currentState which we have called as count paired with a dispatch method, this dispatch method allows us to execute the code corresponding to a particular actions.
  const [count, dispatch] = useReducer(reducer, initialState);
  // console.log("COunt", count)

  return (
    <div>
      <div>Count -{count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;
