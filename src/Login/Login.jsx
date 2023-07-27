import React from "react";
import { connect } from "react-redux";
import {Field, reduxForm} from "redux-form"
import { createField, Input } from "../components/common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../utils/validators/validators";
import {login} from "../redux/auth-reducer"
import {Navigate} from "react-router-dom"
import classes from "../components/common/FormsControls/FormsControls.module.css"
 
const maxLength30 = maxLengthCreator(30);
const maxLength20 = maxLengthCreator(20);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField("Email", Input, "email",[required, maxLength30])}
                {/* <Field placeholder={"Email"} 
                       component={Input} 
                       name={"email"}
                       validate={[required, maxLength30]}/> */}
            </div>
            <div>
                <Field placeholder={"Password"} component={Input} name={"password"} type={'password'}  validate={[required, maxLength20]} />
            </div>
            <div>
                <Field type={"checkbox"} component={Input}  name={"rememberMe"}/> remember me
            </div>
           { error && <div className={classes.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }


    if(props.isAuth){
        return  <Navigate to="/profile" replace={true} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}  />
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login}) (Login);