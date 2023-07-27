import React from "react";
import classes from "./../Dialogs.module.css"

const Messages = (props) => {
    return(
        <div className={classes.message}> 
                {props.message} {props.online}
                
        </div>)
}

export default Messages;