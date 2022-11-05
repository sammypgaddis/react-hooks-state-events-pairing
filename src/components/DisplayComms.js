import React from "react";

const DisplayComms = ({comments}) => {
    return (
    <div>
        <h2>2 Comments</h2>
        <h3>{comments.user}</h3>
        <p>{comments.comment}</p>
    </div>
    )
}

export default DisplayComms