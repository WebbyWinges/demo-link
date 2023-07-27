import React from "react";
import classes from './Friend.module.css';
import Frier from "./Frier/Frier";

const Friend = (props) => {
    
    let friendElement = props.follow.map(s => <Frier gname = {s.fullName} key = {s.id} follow={s.followed} len={s.s}/>)
    return (
        <div className={classes.frier}>
           {friendElement}
        </div>
    )
}
export default Friend;