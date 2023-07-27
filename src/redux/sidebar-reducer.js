let initialState = {
    sidebar:[
      { id: 2, name: 'Andrew'}, 
      { id: 3, name: 'Sveta'}, 
      { id: 4, name: 'Saha'},
    ]
  };

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;