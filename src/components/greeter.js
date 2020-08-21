import React, { useState, useEffect } from 'react'


const Greeter = () => {
    const [name, setName] = useState("");
    useEffect(() => {
        console.log(name)
    }, [name]
    )

    return (
        <div onClick={() => setName()}>
            <p>What's your name?</p>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <button>Submit</button>
            <p>Hello {name}, good to see you!</p>
        </div>
    )
}

export default Greeter