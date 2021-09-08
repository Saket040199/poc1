import React from "react";
import Delete1 from '../../Assests/delete.png';
import './delete.css';

const Delete = () => {
    return <div>
        <button className='deletebutton'><img className="deleteimg"src={Delete1}></img></button>
    </div>

}
export default Delete;