import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './LogIn.css'

const LogIn = () => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/LogIn', { email, password })
            .then(result => {
                console.log(result);

                if (result.data.type === "success") {
                    console.log(result.data.email);
                    localStorage.setItem("current-email", result.data.email);

                    const successMessage = result.data.admin
                        ? "Admin Login Successful"
                        : result.data.isTeam
                            ? "Team Member Login Successful"
                            : "User Login Successful";

                    toast.success(successMessage, {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });

                    const redirectPath = result.data.admin
                        ? '/Admin'
                        : result.data.isTeam
                            ? '/Team'
                            : '/Home';

                    setTimeout(() => {
                        navigate(redirectPath);
                    }, 3000);
                }
            })
            .catch(err => {
                if (err.response && err.response.data) {
                    toast.error(err.response.data.message, {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                } else {
                    console.error("Unexpected Error:", err);
                }
            });
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
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                className="toast-con"
                transition={Bounce}
            />
        </>
    )
}
export default LogIn