import React, { useState } from 'react'

const ImagePreview = () => {
    const [image, setImage] = useState("https://cdn.theatlantic.com/thumbor/pN25nhF1hatn7QpckNtABKwzmoI=/0x61:1000x624/720x405/media/old_wire/img/upload/2013/03/18/happydog/original.jpg")
    const [display, setDisplay] = useState("https://cdn.theatlantic.com/thumbor/pN25nhF1hatn7QpckNtABKwzmoI=/0x61:1000x624/720x405/media/old_wire/img/upload/2013/03/18/happydog/original.jpg")
    return (
        <div>
            <input onChange={e => setImage(e.target.value)}/> 
            <button onClick={() =>setDisplay(image)}>Submit</button> <br /> 
            <img src={display} />
        </div>
    )
}

export default ImagePreview