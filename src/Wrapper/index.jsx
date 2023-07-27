import React from "react";
import './index.css'

const BoxShadowWrapper = (props) => {
    console.log(props.children);
    
    return (
        <div className="shadow">{props.children}</div>
    );
}

export default BoxShadowWrapper;