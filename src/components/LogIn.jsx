import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/LogIn', { email, password })
            .then(result => {
                console.log(result)
                if (result.data.type === "success") {
                    navigate('/Home')
                }
                else {
                    alert(result.data.message)
                }
            })
            .catch(err => console.log(err))

    };

    return (
        <>
            <div className="backimg min-h-screen flex justify-center items-center m-0 p-0">
                <div className='Login'>
                    <form onSubmit={handleSubmit}>
                        <div className='text-2xl text-[#8a8acd]'><center className='text-primary mt-[-10px]'>Login</center></div>
                        <div className="input-container ">
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
                        <button type="submit" className="login-btn text-primary hover:bg-primary">Login</button>
                        <p className='mt-4'>Don't have an account? <NavLink to="/Register" className="register-link text-white hover:text-primary">Register</NavLink></p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default LogIn