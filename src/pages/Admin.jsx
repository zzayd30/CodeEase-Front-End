import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
const Admin = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full h-[73px] bg-[#8a8acd] flex  text-white  flex-col">
                <div className='flex justify-between px-10'>
                    <div className="eik">
                        <div className="name text-2xl">CodeEase Solutions</div>
                        <div className="ad_panel text-xl">Admin Panel</div>
                    </div>

                    <div className='my-auto'> <Link
                        // to="/"
                        className={`cursor-pointer flex items-center font-semibold rounded-full ml-3 px-4 h-10 bg-primary text-white 
                        `}
                        onClick={() => {
                            toast.success("Logged Out Successful", {
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
                            setTimeout(() => {
                                navigate('/');
                            }, 3000);
                        }}
                    >
                        Log Out
                    </Link></div>
                </div>
            </div>
            <div className="min-h-screen pt-16 mb-[32px]    ">
                <div className="container flex justify-center flex-col gap-10">
                    <div className='text-5xl text-black justify-center items-center'>
                        <h1 className='text-black'>Orders Details</h1>
                    </div>
                    <div className='flex justify-between gap-2 flex-wrap'>



                        <div className='bg-light w-[350px]  p-10'>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    Order Type: Web Development
                                </div>
                                <div>User: Zaid Latif</div>
                                <div>Email: Zaidlatif30@gmail.com</div>
                                <div>Order Placed: 19 Oct 2024</div>
                                <div>Order Deadline: 19 Jan 2025</div>
                                <div className='flex justify-between'>

                                    <button className='text-white px-4 py-1 rounded-full bg-green-400'>Deliver</button>
                                    <button className='text-white px-4 py-1 rounded-full bg-red-400'>Cancel</button>
                                </div>
                            </div>

                        </div>

                        <div className='bg-light w-[350px]  p-10'>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    Order Type: Web Development
                                </div>
                                <div>User: Zaid Latif</div>
                                <div>Email: Zaidlatif30@gmail.com</div>
                                <div>Order Placed: 19 Oct 2024</div>
                                <div>Order Deadline: 19 Jan 2025</div>
                                <div className='flex justify-between'>

                                    <button className='text-white px-4 py-1 rounded-full bg-green-400'>Deliver</button>
                                    <button className='text-white px-4 py-1 rounded-full bg-red-400'>Cancel</button>
                                </div>
                            </div>

                        </div>
                        <div className='bg-light w-[350px]  p-10'>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    Order Type: Web Development
                                </div>
                                <div>User: Zaid Latif</div>
                                <div>Email: Zaidlatif30@gmail.com</div>
                                <div>Order Placed: 19 Oct 2024</div>
                                <div>Order Deadline: 19 Jan 2025</div>
                                <div className='flex justify-between'>

                                    <button className='text-white px-4 py-1 rounded-full bg-green-400'>Deliver</button>
                                    <button className='text-white px-4 py-1 rounded-full bg-red-400'>Cancel</button>
                                </div>
                            </div>

                        </div>
                        <div className='bg-light w-[350px]  p-10'>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    Order Type: Web Development
                                </div>
                                <div>User: Zaid Latif</div>
                                <div>Email: Zaidlatif30@gmail.com</div>
                                <div>Order Placed: 19 Oct 2024</div>
                                <div>Order Deadline: 19 Jan 2025</div>
                                <div className='flex justify-between'>

                                    <button className='text-white px-4 py-1 rounded-full bg-green-400'>Deliver</button>
                                    <button className='text-white px-4 py-1 rounded-full bg-red-400'>Cancel</button>
                                </div>
                            </div>

                        </div>
                        <div className='bg-light w-[350px]  p-10'>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    Order Type: Web Development
                                </div>
                                <div>User: Zaid Latif</div>
                                <div>Email: Zaidlatif30@gmail.com</div>
                                <div>Order Placed: 19 Oct 2024</div>
                                <div>Order Deadline: 19 Jan 2025</div>
                                <div className='flex justify-between'>

                                    <button className='text-white px-4 py-1 rounded-full bg-green-400'>Deliver</button>
                                    <button className='text-white px-4 py-1 rounded-full bg-red-400'>Cancel</button>
                                </div>
                            </div>

                        </div>
                        <div className='bg-light w-[350px]  p-10'>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    Order Type: Web Development
                                </div>
                                <div>User: Zaid Latif</div>
                                <div>Email: Zaidlatif30@gmail.com</div>
                                <div>Order Placed: 19 Oct 2024</div>
                                <div>Order Deadline: 19 Jan 2025</div>
                                <div className='flex justify-between'>

                                    <button className='text-white px-4 py-1 rounded-full bg-green-400'>Deliver</button>
                                    <button className='text-white px-4 py-1 rounded-full bg-red-400'>Cancel</button>
                                </div>
                            </div>

                        </div>




                    </div>
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
        </>)
}

export default Admin
