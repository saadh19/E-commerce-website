import React, { useState } from 'react'
import Validation from './LoginValidation'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const [values,setValues]=useState({
        email:'',
        password:''
    })

    const [errors,setErrors]=useState({})

    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:event.target.value}))
    }

    const navigate=useNavigate();
    const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (
        validationErrors.email === "" &&
        validationErrors.password === ""
    ) {
        axios.post("http://localhost:5000/login", values)
            .then((res) => {
                alert("Login Successful");
                if(res.data.status==="Success"){
                  localStorage.setItem("username", res.data.user.name);
                  localStorage.setItem("useremail", res.data.user.email);
                  localStorage.setItem("userpassword", res.data.user.password);
                  localStorage.setItem("userId",res.data.user.id)
                  navigate('/home');
                }else{
                  alert("No Records");
                }
            })
            .catch((err) => console.log(err));
    }
    };
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className ='mb-3'>
                <label htmlFor='email'><strong>Email</strong></label>
                <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0'/>
                {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className ='mb-3'>
                <label htmlFor='password'><strong>Password</strong></label>
                <input type='Password' placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0' />
                {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0' >Login</button>
            <Link to='/Signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
