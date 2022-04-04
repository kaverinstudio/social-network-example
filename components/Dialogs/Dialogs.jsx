import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formcontrols/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";



const Dialogs = (props) => {

   let state = props.dialogsPage;

   let dialogElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

   let messagesElements = state.messagesData.map(m => <Message message={m.message} />);

    let addNewMessage = (values) => {
       props.addDialogCreator(values.newDialogText);

    }

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialog_items}>

            {dialogElements}

         </div>
         <div className={classes.messages}>

            {messagesElements}

         </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
   )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form className={classes.new_post} onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength50]} name={"newDialogText"} placeholder={"Enter your message"}/>
            <button className={classes.send_post}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;