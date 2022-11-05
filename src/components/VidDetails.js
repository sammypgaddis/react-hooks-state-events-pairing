import React from "react";
import DisplayComms from "./DisplayComms";
import { useState } from "react";


const VidDetails = ({vidData}) => {
    // console.log(vidData.embedUrl)
    const [likeButton, setLikeButton] = useState(vidData.upvotes)

    const handleLikeButton = () => {
        setLikeButton(likeButton+1)
        console.log(likeButton)
    }
    const [dislikeButton, setDislikeButton] = useState(vidData.downvotes)
    const handleDislikeButton = () => {
        setDislikeButton(dislikeButton+1)
    }

    const [hideComments, setHideComments] = useState(true)

    const handleCommentsButton = () => {
        setHideComments(!hideComments)
    }


    const renderComments = vidData.comments.map((commentObj) => {
      return(
        <DisplayComms comments = {commentObj}/>
      )
    })

    
    return (
        <div>
            <iframe
        width="919"
        height="525"
        src={vidData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
            />
            <h1>{vidData.title}</h1>
            <p>{vidData.views}Views | Uploaded {vidData.createdAt}</p>
            <button onClick={handleLikeButton}> {likeButton}👍</button>
            <button onClick={handleDislikeButton}>{dislikeButton}👎</button ><br/><br/>
            <button onClick={handleCommentsButton}>Hide Comments</button>
            <hr/>
            {hideComments ? "" : renderComments}
        </div>
    )
}

export default VidDetails
//shadh