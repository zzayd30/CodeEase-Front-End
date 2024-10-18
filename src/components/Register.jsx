import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Register.css"

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/Register', { username, email, password})
            .then(result => {
                console.log(result)
                navigate('/')

            })
            .catch(err => console.log(err))

    };

    return (
        <div className="register_container">
            <div className='register'>
                <form onSubmit={handleSubmit} className='Container'>
                    <h1 className='text-2xl text-primary'>Register</h1>
                    <div className="input-container">
                        <input
                            className='input-field'
                            type="text"
                            id="username"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-container">
                        <input
                            className='input-field'
                            type="email"
                            id="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-container">
                        <input
                            className='input-field'
                            type="password"
                            id="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn text-primary hover:bg-primary">Register</button>
                    <p className='text-black mt-[10px]'>Already have an account?<NavLink to="/" className="register-link text-white hover:text-primary">&nbsp;Log In</NavLink></p>
                </form>
            </div>
        </div>
    )
}

export default Register
