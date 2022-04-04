import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formcontrols/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {

    let postElements = props.post.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount} />);


    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.block_posts}>
            <AddPostFormRedux onSubmit={addNewPost}/>
            { postElements}

        </div >

    )
});

const AddPostForm = (props) => {
    return(
        <form className={classes.new_post} onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPostText"} placeholder={"Enter your post"} validate={[required, maxLength10]}/>
            <button className={classes.send_post}>Send</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form:"newPostText"})(AddPostForm)

export default MyPosts