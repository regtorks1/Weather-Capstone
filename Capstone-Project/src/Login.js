import React from 'react';
import './Login.css';
import {useState} from 'react';
import {Link} from "react-router-dom";
import { Field, reduxForm } from 'redux-form';


// const newField = ({
//   input,
//   type,
//   placeholder,
//   id,
//   meta: { touched, error },
//   ...rest
// }) => {
//   return (
//     <div>
//       <input {...input} placeholder={placeholder} type={type} id={id} />
//       {touched && error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

const required = value => (value ? undefined : 'Required!');
const longEnough = value =>
  value && value.length >= 3 ? undefined : 'Too short!';
const mail = value =>
  value && /(.+)@(.+){2,}\.(.+){2,}/i.test(value)
    ? undefined
    : 'Invalid email!';

    const submit = (values) => {
      console.log('submit inside form');
      console.log(values)
    }


const Login = ({handleSubmit,pristine,submitting, valid}) => {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');



    return(  
    <div>
      <div className = 'login_container'>
    <form className = 'form_Name' onSubmit = {handleSubmit(submit)}>
    <h1 className = 'login_heading'>LOGIN HERE</h1>
    
       
       <Field
        name = 'name' 
        type = "text" 
       placeholder = 'Name' 
       component = 'input'
       value = {name}
       onChange = {(event) => {setName(event.target.value)} } 
       validate = {[required,longEnough]}/> 

      
      <Field
      name = 'email' 
      type = 'text' 
      placeholder = 'Email'  
      component = 'input' 
      value = {email}
      onChange = {(event) => {setEmail(event.target.value)}}
      validate = {[required,mail]}/>
    
      <Field 
       name = 'password'
       type = 'password' 
      placeholder = 'Password' 
      component = 'input' 
      value = {password}
      onChange = {(event) => {setPassword(event.target.value)}}
      required/>
    

       <Link to = '/main'>
         <button  type = 'submit' className ="login_btn" disabled ={!valid || pristine || submitting}>LOGIN</button>
         </Link>

      <p>Forgot Password? Please reset 
        <Link to = '/forgot-password'> here</Link>
        </p>
  
    </form>
   
     </div>
    </div>
  )
    }


export default (reduxForm({
  form: 'Login'
})(Login))

