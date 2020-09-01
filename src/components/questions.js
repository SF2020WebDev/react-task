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
                <input type="radio" id="yes1" name={answerOne} value="yes" results="yes" onClick={() => setAnswerOne=="yes"}/> Yes
                <input type="radio" id="no1" name={answerOne} value="no" results="no" onClick={() => setAnswerOne=="no"}/> No
                <p onChange={() => complete(true) && answerOne=="yes" ? "yes" || complete(true) && answerOne=="no" ? "no" : null : null} />
            </div>
            <br />
            <div>
                <p>Are you over 25?</p>
                <input type="radio" id="yes2" name={answerTwo} value="yes" results="yes" onClick={() => setAnswerTwo=="yes"} /> Yes
                <input type="radio" id="no2" name={answerTwo} value="no" results="no" onClick={() => setAnswerTwo=="no"}/> No
                <p onChange={() => complete(true) && answerTwo=="yes" ? "yes" || complete(true) && answerTwo=="no" ? "no" : null : null}/>
            </div>
            <br />
            <div>
                <p>Do you watch the news?</p>
                <input type="radio" id="yes3" name={answerThree} value="yes" results="yes" onClick={() => setAnswerThree=="yes"} /> Yes
                <input type="radio" id="no3" name={answerThree} value="no" results="no" onClick={() => setAnswerThree=="no"} /> No
                <p onChange={() => complete(true) && answerThree=="yes" ? "yes" || complete(true) && answerThree=="no" ? "no" : null : null} />
            </div>
            <br />
            <div>
                <p>Do you have any allergies?</p>
                <input type="radio" id="yes4" name={answerFour} value="yes" results="yes" onClick={() => setAnswerFour=="yes"}/> Yes
                <input type="radio" id="no4" name={answerFour} value="no" results="no" onClick={() => setAnswerFour=="no"}/> No
                <p onChange={() => complete(true) && answerFour=="yes" ? "yes" || complete(true) && answerFour=="no" ? "no" : null : null} />
            </div>
            <br />
            <div>
                <p>Do you have any tattoos?</p>
                <input type="radio" id="yes5" name={answerFive} value="yes" results="yes" onClick={() => setAnswerFive=="yes"} /> Yes
                <input type="radio" id="no5" name={answerFive} value="no" results="no" onClick={() => setAnswerFive=="no"} /> No
                <p onChange={() => complete(true) && answerFive=="yes" ? "yes" || complete(true) && answerFive=="no" ? "no" : null : null}/>
            </div>
            <br />
            <button onClick={()=> setComplete(true)} > Submit </button>
            
        </div>
    )
}

export default Questions