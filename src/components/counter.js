import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = 'Counter:' + count;
    });

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
            </div>
        </div>
    )
}

export default Counter
