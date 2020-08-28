import React, { useState } from 'react'

const Questions = () => {
    const [answerOne, setAnswerOne] = useState("")

    const [answerTwo, setAnswerTwo] = useState("")

    const [answerThree, setAnswerThree] = useState("")

    const [answerFour, setAnswerFour] = useState("")

    const [answerFive, setAnswerFive] = useState("")

    const [complete, setComplete] = useState(false)
    return (
        <div>
            <p>Do you live in the UK?</p>
            <input type="radio" id="yes" name="one" value={answerOne} onChange={e => setAnswerOne(e.target.value)} /> Yes
            <input type="radio" id="no" name="one" value={answerOne} onChange={e => setAnswerOne(e.target.value)} /> No
            <p>{answerOne}</p>
            <br />
            <p>Are you over 25?</p>
            <input type="radio" id="yes" name="two" value={answerTwo} onChange={e => setAnswerTwo(e.target.value)} /> Yes
            <input type="radio" id="no" name="two" value={answerTwo} onChange={e => setAnswerTwo(e.target.value)} /> No
            <p>{answerTwo}</p>
            <br />
            <p>Do you watch the news?</p>
            <input type="radio" id="yes" name="three" value={answerThree} onChange={e => setAnswerThree(e.target.value)} /> Yes
            <input type="radio" id="no" name="three" value={answerThree} onChange={e => setAnswerThree(e.target.value)} /> No
            <p>{answerThree}</p>
            <br />
            <p>Do you have any allergies?</p>
            <input type="radio" id="yes" name="four" value={answerFour} onChange={e => setAnswerFour(e.target.value)} /> Yes
            <input type="radio" id="no" name="four" value={answerFour} onChange={e => setAnswerFour(e.target.value)} /> No
            <p>{answerFour}</p>
            <br />
            <p>Do you have any tattoos?</p>
            <input type="radio" id="yes" name="five" value={answerFive} onChange={e => setAnswerFive(e.target.value)} /> Yes
            <input type="radio" id="no" name="five" value={answerFive} onChange={e => setAnswerFive(e.target.value)} /> No
            <p>{answerFive}</p>
            <br />
            <button onClick={()=>setComplete(true)}> Submit </button>
            
        </div>
    )
}

export default Questions