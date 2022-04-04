import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formcontrols/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/formcontrols/FormsControls.module.css"

const LoginForm =(props) => {
    return <div>
        <h1>LOGIN</h1>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[required]} name={"email"} type="text" placeholder={"Email"}/>
            </div>
            <div>
                <Field component={Input} validate={[required]} name={"password"} type="password" placeholder={"Password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type="checkbox"/> remember me
            </div>
            {props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

const Login =(props) => {
    const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);