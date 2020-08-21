import React, { useState } from 'react'
import Alert from './alert.js'

const Counter = () => {
    const [count, setCount] = useState(0);

    const Increase = () => {
        setCount(prevCount => prevCount + 1);

    }

    const Decrease = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div className="Counter">
            <div>
                <button onClick={Increase}>Increase</button>
                <button onClick={Decrease}>Decrease</button>
                <p>{count}</p>
                <Alert />
            </div>
        </div>
    )
}

export default Counter
