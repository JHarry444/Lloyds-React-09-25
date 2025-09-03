import { useState } from "react";

export default function Counter() {
    // let count = 0; bad
    // useState 'hooks' into the react component lifecycle
    const [count, setCount] = useState( 0);

    function incrementCount() {
        setCount(count + 1)
    }
    return (
        <>
            <h2>State</h2>
            <input type="number" readOnly value={count} /><button onClick={incrementCount}>+1</button>
            <p>{new Date().toISOString()}</p>
        </>
    )
}