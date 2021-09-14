import React from "react";
import Comment1 from '../../Assests/comment.png'
import './comment.css'

const Comment = () => {

    const alertbox = () =>{
        alert("Comment part is left!!");
    }
    

    return <div>
        <button onClick={alertbox} className="commentbutton"><img className="commentimg" src={Comment1}></img></button>
    </div>

}
export default Comment;