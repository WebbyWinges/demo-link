import React from "react"
import classes from "./FormsControls.module.css"
import { Field } from "redux-form";

const FormsControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {props.children}
            </div>
            {meta.error && meta.touched && <span>some error</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormsControl {...props}><textarea {...input} {...restProps}/></FormsControl>
    )
}


export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;

    return (
        <FormsControl {...props}><input {...input} {...restProps}/></FormsControl>
    )
}

export const createField = (placeholder, component,  name, validators) => <Field placeholder={placeholder} 
component={component} 
name={name}
validate={validators}/>