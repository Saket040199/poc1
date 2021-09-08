import React from "react";
import Comment1 from '../../Assests/comment.png'
import './comment.css'

const Comment = () => {
    return <div>
        <button className="commentbutton"><img className="commentimg" src={Comment1}></img></button>
    </div>

}
export default Comment;