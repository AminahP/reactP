import {useState} from 'react'
import CountSpan from "./CountSpan";


export default (props) => {

// const countState = useState(0);

// const count = countState(0);
// const setCount = countState(1);

const [message, setMessage] = useState(`${props.firstName} ${props.lastName}`); //easier way to write out whats above

const handleIncrement = () => setMessage("Hello World")
const handleDecrement = () => setMessage("Bye World")
    return (
     <>
     <span> Current Count: {message} </span>
     <section>
        <button onClick ={handleIncrement}>+</button>
        <button onClick={handleDecrement} >-</button>
    </section>
     </>
    )
}