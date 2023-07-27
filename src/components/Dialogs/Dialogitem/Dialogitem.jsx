import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css"

const DialogItem = (props) => {
    let path ="/dialogs/" + props.id;
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <div className={classes.dialogItem}>
                <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png" alt="" />
                <NavLink to = {path}> {props.name} </NavLink>    
            </div>
                
        </div>
    )
}

export default DialogItem;