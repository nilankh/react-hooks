// hooks lecture2

import React, { Component } from 'react'
// first step is to create a component and we have  to used a class component
class ClassCounter extends Component {
    constructor(props) {
        super(props)
    // second step is to create a state variable initialized to 0
        this.state = {
             count: 0
        }
    }
    // the last step is to create a method that is capable of setting this state value
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
