import React from "react";
import classes from '.././Friend.module.css';

const Frier = (props) => {
    if(props.follow === true )  {
        return (
            <div className={classes.named}>
                 <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png" alt="" />
                 <div>{props.gname}</div>
             </div>
         )
    }

}

export default Frier;