import React from "react";
import Comment from "../Comment/Comment";
import TCMicon from "../TCMIcon/TCMIcon";
import './rightpanel.css'

export const RightPanel = () => {
    return(
        <div className="rightpanel">
             <Comment />
             <TCMicon />
        </div>
    );
}