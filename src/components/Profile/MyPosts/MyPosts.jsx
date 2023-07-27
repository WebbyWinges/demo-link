import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {required, maxLengthCreator} from '../../../utils/validators/validators'
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
    let state = props.posts;

    let postsElement = state.map(p => <Post message={p.message} count={p.likesCount} />);

    let addNewPost = (values) => {
        props.addPost(values.newPost);
    }
    return (
        <div className={classes.postsBlock}>
            <h3>my post</h3>
            <div className={classes.posts}>
                {postsElement}
            </div>
            <AddMyPostFormRedux onSubmit={addNewPost}/>
        </div>
    )
});
const addMyPostForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={"newPost"} validate={[required, maxLength10]} placeholder={'ost message'} />
        </div>
        <div>
            <button>New post</button>
        </div>
    </form>)
}
const AddMyPostFormRedux = reduxForm({form: "MyPostAddPostForm"})(addMyPostForm)

export default MyPosts;