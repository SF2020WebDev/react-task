import React  from 'react'

const Post = (props) => { 
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.image}</p>
            <p>{props.content}</p>
        </div>
    )
    
}

export default Post