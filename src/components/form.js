import React, {useState, useEffect} from 'react'

const Form = () => {
    const [name, setName] = useState("");

    const [age, setAge] = useState("");

    const [colour, setColour] = useState("");

    const [food, setFood] = useState("");

    return (
        <div>
            <form>
                <p>What's your name?</p>
                <input value={name} onChange={e => setName(e.target.value)}/> 

                <p>How old are you?</p>
                <input value={age} onChange={e => setAge(e.target.value)}/> 

                <p>What's your favourite colour?</p>
                <input value={colour} onChange={e => setColour(e.target.value)}/> 

                <p>What's your favourite food?</p>
                <input value={food} onChange={e => setFood(e.target.value)}/> 
                
                <br/> <button onClick={()=>console.log({name},{age},{colour},{food})}>Submit</button>

            </form>
        </div>
    )
}

export default Form