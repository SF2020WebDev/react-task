import React, {useState, useEffect} from 'react'

const Form = () => {
    const [name, setName] = useState("");
    useEffect(() => {
        console.log(name)
    }, [name]
    )

    const [age, setAge] = useState("");
    useEffect(() => {
        console.log(age)
    }, [age]
    )

    const [colour, setColour] = useState("");
    useEffect(() => {
        console.log(colour)
    }, [colour]
    )

    const [food, setFood] = useState("");
    useEffect(() => {
        console.log(food)
    }, [food]
    )

    return (
        <div>
            <form>
                <p>What's your name?</p>
                <input value={name} onChange={e => setName(e.target.value)}/> <button>Submit</button>
                <p>{name}</p>
                <p>How old are you?</p>
                <input value={age} onChange={e => setAge(e.target.value)}/> <button>Submit</button>
                <p>{age}</p>
                <p>What's your favourite colour?</p>
                <input value={colour} onChange={e => setColour(e.target.value)}/> <button>Submit</button>
                {colour}
                <p>What's your favourite food?</p>
                <input value={food} onChange={e => setFood(e.target.value)}/> <button>Submit</button>
                <p>{food}</p>
            </form>
        </div>
    )
}

export default Form