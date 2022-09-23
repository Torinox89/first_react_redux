import './App.css';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'


function Counter() {
    // Call useSelector to grab the current value of our state variable
    // from the store, and assign it to a variable named "count"
    const count = useSelector((state) => state.value)
    // And include the useDispatch hook...
    const dispatch = useDispatch()
    //Import useState from React and then instantiate a state variable 
    //to track the user's input; we can set the initial value to 0:
 //Just because we're using Redux doesn't mean all our state variables 
 //need to be tracked by Redux! When developing your own apps, 
 //consider the use of any given state variable: 
 //-Will it be needed by several components? 
 //-If not, it may be worthwhile to simply declare it local to that component.
    const [ input, setInput ] = useState(0)

      // build a function that our form will use:
    const byAmountSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }
//build a form that calls this function whenever it is submitted and include an input
// within that form that updates the value of input whenever its value is changed.
    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <form onSubmit={(e) => byAmountSubmit(e)}>
            <input type="number" onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Counter
