/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Register() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('', {name, email, password: password})
        .then(result => console.log(result))
        .catch(err => console.log(err))

    }


  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className="bg-white p-3 rounded w-25">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor='email'>
                    <strong>Name</strong>
                </label>
                <input
                type='text'
                placeholder='Enter your name'
                className='form-control rounded-0'
                autoComplete='off'
                name='email'
                onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor='email'>
                    <strong>Email</strong>
                </label>
                <input
                type='text'
                placeholder='Enter your mail id'
                className='form-control rounded-0'
                autoComplete='off'
                name='email'
                onChange={(e) => setEmail(e.target.value)}

                />
            </div>

            <div className="mb-3">
                <label htmlFor='email'>
                    <strong>Password</strong>
                </label>
                <input
                type='password'
                placeholder='Enter password'
                className='form-control rounded-0'
                name='password'
                onChange={(e) => setPassword(e.target.value)}

                />
            </div>

            <button type='submit' className='btn btn-success w-100 rounded-0'>
                Signup
            </button>
            </form>
            <p>Already have an account?</p>
            <link to='/login'  className='btn btn-default w-100 border bg-light rounded-0 text-decoration-none'>
               Login
            </link>
       
      </div>
    </div>
  )
}

export default Register
