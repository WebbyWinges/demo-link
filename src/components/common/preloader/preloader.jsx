import preloader from "../../../assets/imges/preloader.svg";
import React from "react";
import classes from '../../Users/Users.module.css';
let Preloader = (props) => {
    return <div className={classes.preloader}> 
         <img src={preloader} alt=""/> 
    </div>
}

export default Preloader;
