const ADD_MESSAGE='ADD-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message:'Hi'},
        { id: 2, message: 'How is your it-kamasutra'}, 
        { id: 3, message: 'Yo'}, 
        { id: 4, message: 'Yo'}, 
        { id: 5, message: 'Yo'}, 
        { id: 6, message: 'yo'} 
  ],

  dialogs: [
    { id: 1, name:'Dima'}, 
    { id: 2, name: 'Andrew'}, 
    { id: 3, name: 'Sveta'}, 
    { id: 4, name: 'Saha'}, 
    { id: 5, name: 'Viktor'}, 
    { id: 6, name: 'Valera'},
  ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: text}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})


export default dialogsReducer;


