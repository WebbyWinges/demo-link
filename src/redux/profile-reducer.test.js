import profileReducer from "./profile-reducer";
import {addPostActionCreator, deletePost } from "./profile-reducer";
let state= {
    posts: [
        { id: 1, message: 'Hi', likesCount: 12 },
        { id: 2, message: 'How is your it-kamasutra', likesCount: 122 },
        { id: 3, message: 'How', likesCount: 22 },
        { id: 4, message: 'How is sutra', likesCount: 32 },
        { id: 5, message: 'it-kamasutra', likesCount: 2 },
    ]
};

it('new post length should be incremented', () => {
    //1.test data
    let action = addPostActionCreator('it-gog');
    //action
    let newState = profileReducer(state, action);
    //3. expection
    expect(newState.posts.length).toBe(6);
}) 

it('after ledetedpost length should be incremented', () => {
    //1.test data
    let action = deletePost(1);
    //action
    let newState = profileReducer(state, action);
    //3. expection
    expect(newState.posts.length).toBe(4);
}) 
