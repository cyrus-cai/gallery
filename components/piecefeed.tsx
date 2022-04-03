import React, { useState } from "react"

const PieceFeed = (props: any) => {
    const [liked, setLiked] = useState(props.isLiked)
    const [commented, setCommented] = useState(props.isCommented)

    const handleLikeButtonClick = () => {
        setLiked(!liked)
    }

    return (
        <div>
            <p>author:{props.author}</p>
            <p>discribtion:{props.discription}</p>
            <p>likes:{props.likes}</p>
            <p>isLiked?:{liked ? "true" : "false"}</p>
            <button onClick={() => { handleLikeButtonClick() }}>like</button>
            <img src={props.image} style={{ width: "100px" }} alt="" />
            <p>comments:{props.comments}</p>
        </div>
    )
}

export default PieceFeed



