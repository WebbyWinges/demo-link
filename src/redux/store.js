import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
let store = {
   _rerenderEntireTree  () {
  },
   _state : {
      profilePage:{
          posts:[
              { id: 1, message:'Hi', likesCount: 12}, 
              { id: 2, message: 'How is your it-kamasutra', likesCount: 122}, 
              { id: 3, message: 'How', likesCount: 22}, 
              { id: 4, message: 'How is sutra', likesCount: 32}, 
              { id: 5, message: 'it-kamasutra', likesCount: 2}, 
            ] ,
            newPostText:''
      },
      dialogsPage:{
          messages: [
              { id: 1, message:'Hi', online:true}, 
              { id: 2, message: 'How is your it-kamasutra',online:true}, 
              { id: 3, message: 'Yo',online:true}, 
              { id: 4, message: 'Yo',online:true}, 
              { id: 5, message: 'Yo',online:true}, 
              { id: 6, message: 'yo',online:true}, 
        ],
      
        newMessageText:'',
  
        dialogs: [
          { id: 1, name:'Dima'}, 
          { id: 2, name: 'Andrew'}, 
          { id: 3, name: 'Sveta'}, 
          { id: 4, name: 'Saha'}, 
          { id: 5, name: 'Viktor'}, 
          { id: 6, name: 'Valera'},
        ],
      },
      sidebars:{
        sidebar:[
          { id: 2, name: 'Andrew'}, 
          { id: 3, name: 'Sveta'}, 
          { id: 4, name: 'Saha'},
        ]
      }
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
   this._rerenderEntireTree = observer;
 },  

dispatch (action) {
   this._state.profilePage = profileReducer ( this._state.profilePage, action );
   this._state.dialogsPage = dialogsReducer ( this._state.dialogsPage, action );
   this._state.sidebars = sidebarReducer ( this._state.sidebars, action );

   this._rerenderEntireTree(this._state);
  }
}
 export default store;

