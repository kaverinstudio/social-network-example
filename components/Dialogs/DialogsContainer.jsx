import { connect } from "react-redux";
import {addDialogCreator} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
   return {
      dialogsPage : state.dialogsPage,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

      addDialogCreator : (newDialogText) => {
         dispatch(addDialogCreator(newDialogText));
      }
   }
}


export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);