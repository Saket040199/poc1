import React from "react";
import Label from '../Label/Label';
import Delete from "../Delete/Delete";
import Expand from "../Expand/Expand";
import './leftpanel.css'

 const LeftPanel = () => {
    return(
        <div className='leftpanel'>
             <Label />
             <Delete />
             <Expand />
        </div>
    );
}

export default LeftPanel;