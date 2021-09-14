import React from "react";
import Tcm1 from '../../Assests/tcm.png'
import './tcmIcon.css'

const TCMicon = () => {

    const alertbox = () => {
        alert("TCM part is left!!");
    }

    return <div>
       <button onClick={alertbox} className="tcmbutton"> <img className="tcmimg" src={Tcm1}></img></button>
    </div>

}
export default TCMicon;