import { useState } from "react"


export default function CounterApp() {

    const [state, Setcounter] = useState({
        counter1 : 10,
        counter2 : 20,
        counter3 : 30,
    });

    const {counter1, counter2, counter3} = state;

    const handleCounterUp = () =>{
        Setcounter({
            ...state,
            counter1: counter1 + 1,
        })
    };



    return (
        <>
            <h1>CounterApp 1: {counter1} </h1>
            <h1>CounterApp 2: {counter2} </h1>
            <h1>CounterApp 3: {counter3} </h1>

            <hr />

            <button className="btn btn-success" onClick={ handleCounterUp }>+1</button>
        </>
    )
}