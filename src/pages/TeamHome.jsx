import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TeamHome = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const email = localStorage.getItem('current-email');

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/TeamOrders/${email}`);
            console.log(response.data);
            if (response.data.type === 'success') {
                setOrders(response.data.team_orders);
            } else {
                toast.error(response.data.message || 'Failed to fetch orders', {
                    position: 'bottom-right',
                    autoClose: 2000,
                    theme: 'light',
                    transition: Bounce,
                });
            }
        } catch (error) {
            toast.error('Error fetching orders', {
                position: 'bottom-right',
                autoClose: 2000,
                theme: 'light',
                transition: Bounce,
            });
        } finally {
            setLoading(false);
        }
    };

    const handleOrderCompletion = async (orderId) => {
        try {
            const response = await axios.put(`http://localhost:3000/updateOrderStatus/${orderId}`, {
                status: 'Completed',
                email: email,
            });

            if (response.data.type === 'success') {
                toast.success('Order marked as completed', {
                    position: 'bottom-right',
                    autoClose: 2000,
                    theme: 'light',
                    transition: Bounce,
                });
                setOrders((prevOrders) =>
                    prevOrders.map((order) =>
                        order.orderId === orderId ? { ...order, status: 'Completed' } : order
                    )
                );
            } else {
                toast.error(response.data.message || 'Failed to update order status', {
                    position: 'bottom-right',
                    autoClose: 2000,
                    theme: 'light',
                    transition: Bounce,
                });
            }
        } catch (error) {
            toast.error('Error updating order status', {
                position: 'bottom-right',
                autoClose: 2000,
                theme: 'light',
                transition: Bounce,
            });
        }
    };


    const handleLogOut = () => {
        toast.success("Logged Out Successfully", {
            position: "bottom-right",
            autoClose: 2000,
            theme: "light",
            transition: Bounce,
        });
        setTimeout(() => {
            navigate("/");
        }, 2000);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            <ToastContainer />
            <div className="w-full h-[73px] bg-[#8a8acd] flex text-white">
                <div className="flex justify-between items-center px-10 w-full">
                    <div>
                        <div className="text-2xl font-bold">CodeEase Solutions</div>
                        <div className="text-xl">Admin Panel</div>
                    </div>
                    <button
                        className="cursor-pointer font-semibold rounded-full px-4 h-10 bg-primary text-white"
                        onClick={handleLogOut}
                    >
                        Log Out
                    </button>
                </div>
            </div>
            <div className="p-8">
                <h2 className="text-3xl font-bold text-center mb-6">Assigned Orders</h2>
                {loading ? (
                    <div className="text-center">Loading orders...</div>
                ) : orders.length > 0 ? (
                    <ul className="space-y-6">
                        {orders.map((order, index) => (
                            <li key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="text-xl font-semibold text-gray-800">{order.orderType}</div>
                                    <div className="text-sm text-gray-500">{order.whoseOrder}</div>
                                </div>
                                <div className="text-gray-700">
                                    <div><strong>Assigned To:</strong> {order.assignedTo}</div>
                                    <div><strong>Status:</strong> {order.status}</div>
                                </div>
                                <div className="mt-4">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={order.status === 'Completed'}
                                            onChange={() => handleOrderCompletion(order.orderId)}
                                            className="form-checkbox h-5 w-5 text-green-600"
                                            disabled={order.status === 'Completed'}
                                        />
                                        <span className="text-lg text-gray-600">Mark as Completed</span>
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-lg text-gray-600">No orders assigned yet.</p>
                )}
            </div>
        </>
    );
};

export default TeamHome;