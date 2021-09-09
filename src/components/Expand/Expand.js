
import React from "react";
import { useHistory } from "react-router";
import './expand.css'


const Expand = () =>{

    const Reactpage = () => {
        
        let path = "https://reactjs.org/";
        window.open(path);
    }


    return(
        <div>
            <button
                className="expandbtn" onClick={Reactpage}>  Expand</button>
        </div>
    )
}

export default Expand;