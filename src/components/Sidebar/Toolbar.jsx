import React from "react";
import './Toolbar.css';
import BurguerButton from "./BurguerButton";



const ToolBar = ({openSidebar}) => {    
    return (  
    <div className="toolbar">
        <div className="burger"onClick={openSidebar}>
            <BurguerButton/>    
        </div>
        <div className="title"></div>
    </div> 
    )   
}
    
export default ToolBar;