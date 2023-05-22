import React,{useState} from "react";

export const Counter = () =>{

    const [count,setCount] = useState(0)

    const handleIncrement = () =>{
        if(count < 10){
            setCount(count + 1)
        }
    }

    const handleDecrement = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }

    return (
    <div>
    <h2 data-testid ="counter">Count: {count}</h2>
    <button data-testid="increment" onClick={handleIncrement} disabled={count === 10}>Increment</button>
    <button data-testid="decrement" onClick={handleDecrement} disabled={count === 0}>Decrement</button>
    </div>
    )
} 