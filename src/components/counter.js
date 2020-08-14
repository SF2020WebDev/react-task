import React, { useState } from 'react'

const Counter = () => {
    const {count, setCount} = useState(0);

    return (
        <div className="Counter">
            <div>
                <button onClick={() => setCount(count + 1)}>Increase</button>
            </div>
        </div>
    )
}
