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
            <div>
                <p>Do you live in the UK?</p>
                <input type="checkbox" id="yes1" checked={answerOne==="yes"} name={answerOne} value="yes" results="yes" onClick={() => setAnswerOne("yes")}/> Yes
                <input type="checkbox" id="no1" checked={answerOne==="no"} name={answerOne} value="no" results="no" onClick={() => setAnswerOne("no")}/> No
                {complete ? <p>{answerOne}</p> : null}
            </div>
            <br />
            <div>
                <p>Are you over 25?</p>
                <input type="checkbox" id="yes2" checked={answerTwo==="yes"} name={answerTwo} value="yes" results="yes" onClick={() => setAnswerTwo("yes")} /> Yes
                <input type="checkbox" id="no2" checked={answerTwo==="no"} name={answerTwo} value="no" results="no" onClick={() => setAnswerTwo("no")}/> No
                {complete ? <p>{answerTwo}</p> : null}
            </div>
            <br />
            <div>
                <p>Do you watch the news?</p>
                <input type="checkbox" id="yes3" checked={answerThree==="yes"} name={answerThree} value="yes" results="yes" onClick={() => setAnswerThree("yes")} /> Yes
                <input type="checkbox" id="no3" checked={answerThree==="no"} name={answerThree} value="no" results="no" onClick={() => setAnswerThree("no")} /> No
                {complete ? <p>{answerThree}</p> : null}
            </div>
            <br />
            <div>
                <p>Do you have any allergies?</p>
                <input type="checkbox" id="yes4" checked={answerFour==="yes"} name={answerFour} value="yes" results="yes" onClick={() => setAnswerFour("yes")}/> Yes
                <input type="checkbox" id="no4" checked={answerFour==="no"} name={answerFour} value="no" results="no" onClick={() => setAnswerFour("no")}/> No
                {complete ? <p>{answerFour}</p> : null}
            </div>
            <br />
            <div>
                <p>Do you have any tattoos?</p>
                <input type="checkbox" id="yes5" checked={answerFive==="yes"} name={answerFive} value="yes" results="yes" onClick={() => setAnswerFive("yes")} /> Yes
                <input type="checkbox" id="no5" checked={answerFive==="no"} name={answerFive} value="no" results="no" onClick={() => setAnswerFive("no")} /> No
                {complete ? <p>{answerFive}</p> : null}
            </div>
            <br />
            <button onClick={()=> setComplete(true)} > Submit </button>
            
        </div>
    )
}

export default Questions