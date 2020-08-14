import React from 'react'

const Name = () => {
    return (
        <div>
            <p>
            What's your name?
            <form onsubmit="()">
                <input type="text" id="input" placeholder="Enter text"/>
                <button onclick="function" type="button" id="submitbutton" value="submit">Submit</button>
            </form> 
            </p>
        </div>
    )
}

const Greeter = () => {
    return (
        <div>
            <p>
                <Name />
                Hello {document.getElementById("Name")} , good to see you!
            </p>
        </div>
    )
}


export default Greeter