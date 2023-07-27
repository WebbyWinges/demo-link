import React from "react";
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css"

const Friends = (props) => {
    return (
        <div className={classes.friends}>
            <div className={classes.friend}>
                <Friend sidebar={props.sidebar} follow={props.follow}/>
            </div>
        </div>
    )
}

export default Friends;