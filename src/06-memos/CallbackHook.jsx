import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./showIncrement";



export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementF = useCallback( (value) => {
        setCounter( (c) => c + value);
    }, []);

    useEffect(() => {
        // incrementF();
    }, [incrementF])
    

    // const incrementF = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1>useCallBack Hook : {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementF} />
        </>
    )
}
