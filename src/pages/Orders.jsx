import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Orders = () => {
    const email = localStorage.getItem("current-email");  // Get the logged-in user's email
    const [orders, setOrders] = useState([]);  // State to store orders
    const [error, setError] = useState(null);  // State for error handling

    // Fetch orders when the component mounts
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/orders?email=${email}`);
                const data = await response.json();
                console.log("API Response:", data.orders);
                if (data.success) {
                    setOrders(data.orders);  // Set the orders if the API response is successful
                } else {
                    setError("Failed to fetch orders");
                }
            } catch (error) {
                console.error("Error fetching orders:", error);
                setError("An error occurred while fetching orders");
            }
        };

        if (email) {
            fetchOrders();  // Call the function to fetch orders if email exists
        } else {
            setError("User not logged in");
        }
    }, [email]);  // Dependency array, runs when 'email' changes

    return (
        <>
            <Navbar />
            <div className="h-20 bg-[#8a8acd]"></div>
            <div className="container mx-auto min-h-screen pt-16 mt-5 px-4">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">Your Orders</h1>

                {/* Display error message if there's an issue */}
                {error && <div className="text-red-500 mb-4">{error}</div>}

                {/* Order List Header */}
                {/* Display orders if available */}
                {orders.length > 0 ? (
                    <div className="order-list space-y-4">
                        {orders.map((order, index) => (
                            <div
                                key={index}
                                className="order-item bg-white shadow-md p-6 rounded-lg border border-gray-200"
                            >
                                <div className="order-header flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-medium text-gray-800">Order #{index + 1}</h3>
                                </div>
                                <div className="order-details">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">Order Details:</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        {order.Order.map((item, idx) => (
                                            <li key={idx} className="flex justify-between">
                                                <span><b>Service Name:</b> {item.serviceName}</span>
                                                <span><b>Status:</b> {order.status}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-gray-600 mt-2 mb-2"><strong>Total:</strong> ${order.Total}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No orders found.</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Orders;
