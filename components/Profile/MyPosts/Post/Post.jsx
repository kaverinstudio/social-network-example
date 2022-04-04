import React from "react";
import classes from './Post.module.css';

const Post = (props) => {


    return (
        <div className={classes.posts_arhiv}>
            <img src="ava.png" alt="" />
            {props.message}
            <div>like - {props.likesCount}</div>
        </div>

    )
}

export default Post