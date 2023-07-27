import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import {BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));


  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </Provider>         
  );




// store={store} state={state} dispatch={store.dispatch.bind(store)}

