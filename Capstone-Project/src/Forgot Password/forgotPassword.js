import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

export const ForgotPassword = ({handleSubmit, pristine, submitting, valid}) => {
const [email, setEmail] = useState('');
const [newPassword, setNewPassword] = useState('');

const submit = (values) => {
  console.log('submit inside form');
  console.log(values)
}


    return (
        <div>
            <div>
      <div className = 'login_container'>
    <form className = 'form_Name' onSubmit = {(e) => handleSubmit(submit)}> 
    <h1 className = 'login_heading'>Reset Password</h1>

      <Field 
      name = 'email'
      type = 'email' 
      component = 'input'
      placeholder = 'Email' 
      value = {email} 
      onChange = {(e) => {setEmail(e.target.value)}}
      required
      />

      <Field 
      name = 'password'
      type = 'password' 
      component = 'input'
      placeholder = 'New Password' 
      value = {newPassword} 
      onchange = {(e) => {setNewPassword(e.target.value)}}
      required 
      />

      <Link to = '/'><button className ="login_btn" disabled = {!valid || pristine || submitting}>RESET PASSWORD</button></Link>
    </form>
     </div>
    </div>
        </div>
    )
}

export default (reduxForm({
  form: 'ForgotPassword'
})(ForgotPassword))