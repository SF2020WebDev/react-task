import React,{ useState }  from 'react'

const Post = () => {
    const [title, setTitle] = useState("Dover Castle")
    const [content, setContent] = useState("A medieval castle in Dover, Kent, often referred to as the 'Key to England' due to its strategic importance.")
    const [image, setImage] = useState(<img src="https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/dover-castle/old-hero-images/dover-icon-hero-spring.jpg" />)
    return (
        <div>
            <p>{title}</p>
            <p>{image}</p>
            <p>{content}</p>
        </div>
    )
}

export default Post