// lecture2 useState Hook
import React, {useState} from 'react'

// first step is to create a component
function HookCounter() {
    // second step is to create a state variable initialized to 0
    // the syntax here is known as array destructuring 
    // the last step is to create a method that is(setCount) capable of setting this state value
    const [count, setCount ] = useState(0)
    // console.log("count", count)
    // console.log("setCount", setCount)
    // this hook or function accepts an arguments which is the initial value of the state property and returns the current value of the state property and method that is capable of updating that state property
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
    
}

export default HookCounter
