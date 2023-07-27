import pluse from "../../../assets/imges/pluse.svg";
import React from "react";
import classes from '../../Users/Users.module.css';
let Pluse = (props) => {
    return <div className={classes.pluse}> 
         <img src={pluse} alt=""/> 
    </div>
}

export default Pluse;
