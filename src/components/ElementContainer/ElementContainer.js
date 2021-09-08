import React from "react";
import LeftPanel from "../LeftPanel/LeftPanel";
import { RightPanel } from "../RightPanel/RightPanel";
import TinyMce from "../TinyMCe/TinyMCe";
import './ElementContainer.css'

 const ElementContainer = () => {
    return <div>
        <div className="root">
        <div>
            <LeftPanel />
        </div>
        <div>
            <TinyMce />
        </div>
        <div>
            <RightPanel />
        </div>
        </div>
    </div>
}

export default ElementContainer;