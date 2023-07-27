import {addPostActionCreator} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


let mapStateToProps = (state) =>{
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost));
        }
    }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;    