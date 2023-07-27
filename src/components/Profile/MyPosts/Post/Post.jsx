import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
   
    return (
        <div className={classes.item}>
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png" alt="" />
            {props.message}
            <div>
                <span>Like {props.count}</span>
            </div>
        </div>
    )
}

export default Post;