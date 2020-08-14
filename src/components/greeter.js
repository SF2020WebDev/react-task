import React from 'react'

let name = window.prompt("Enter your name");

const Greeter = () => {
    return (
        <div>
            <p>
                Hello 
                <alert> {name}, </alert>
                 good to see you!
            </p>
        </div>
    )
}

export default Greeter