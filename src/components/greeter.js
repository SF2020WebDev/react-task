import React, { useState } from 'react'

const Name = () => {
    const [firstName, setFirstName] = useState(``);

    const SelectedName = () => {
        setFirstName(firstName.onsubmit)
    }

    const Greeter = () => {
        return (
            <div>
                <p>
                What's your name?
                <form onsubmit="()">
                    <input type="text" id="input" placeholder="Enter text"/>
                    <button onclick="function" type="button" id="submitbutton" value="submit">Submit</button>
                </form> 
                    <Name />
                    Hello ${SelectedName}, good to see you!
                </p>
            </div>
        )
    }
}

export default Greeter