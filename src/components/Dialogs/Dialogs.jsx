import React from "react";
import classes from "./Dialogs.module.css"
import Messages from "./Message/Message";
import DialogItem from "./Dialogitem/Dialogitem"
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";


const maxLength50 =  maxLengthCreator (50) 

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
    .map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> );


    let messagesElement = state.messages
        .map( message => <Messages message={message.message} key={message.id} online={message.online}/>);
        
    let newMessageBody = state.newMessageBody; 

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }
    
  if (!props.isAuth) return <Navigate to={'/login'}/>;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsy}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElement }
            </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.textBar}>
                <Field component={Textarea} 
                        validate={[required, maxLength50]} 
                        name={"newMessageBody"} 
                        placeholder={"Enter your message"} 
                        className={classes.text} />
                <button className={classes.btn}>Send</button>
            </div>
        </form>  
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;