import React, { useState } from 'react'

const Person = () => {
    const [name, setName] = useState('Sam')
    const [age, setAge] = useState (24)
    const [job, setJob] = useState ('Web Development Apprentice')

    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Job: {job}</p>
        </div>
    )
}

export default Person