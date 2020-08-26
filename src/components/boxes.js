import React, { useState } from 'react'


const Boxes = () => {
    const [color, setColor] = useState("")

    return (<div id="container" className="container-fluid">
        <div onClick={() => setColor('blue')} className="row" style={{backgroundColor:"blue", maxWidth:100, maxHeight:100, marginBottom:50, fontColor:"blue"}}>
                <br />
                <br />
                <br />
                <br />
                {color.length>0 ? <p style={{color:color}}>{color}</p> : null}
        </div>

        <div onClick={() => setColor('red')} className="row" style={{backgroundColor:"red", maxWidth:100, maxHeight:100, marginBottom:50}}>
                <br />
                <br />
                <br />
                <br />
        </div>
        <div onClick={() => setColor('green')} className="row" style={{backgroundColor:"green", maxWidth:100, maxHeight:100, marginBottom:50}}>
                <br />
                <br />
                <br />
                <br />
        </div>
        <div onClick={() => setColor('yellow')} className="row" style={{backgroundColor:"yellow", maxWidth:100, maxHeight:100, marginBottom:50}}>
                <br />
                <br />
                <br />
                <br />
        </div>
        </div>
    )
}
export default Boxes