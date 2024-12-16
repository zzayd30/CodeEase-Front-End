import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Cart = () => {
    const email = localStorage.getItem("current-email");
    const [cartItems, setCartItems] = useState([]);

    // Fetch cart items when component mounts
    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/cart?email=${email}`);
                const data = await response.json();
                console.log(data.data);
                if (data.success) {
                    setCartItems(data.data);
                } else {
                    console.error("Failed to fetch cart items");
                }
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        if (email) {
            fetchCartItems();
        }
    }, [email]);

    const handleProceed = async (serviceName, servicePrice) => {
        const status = "pending";
        try {
            const response = await fetch("http://localhost:3000/api/proceed-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, serviceName, servicePrice, status }),
            });

            const data = await response.json();
            if (data.success) {
                toast.success("Order successfully proceeded!");
                setCartItems(cartItems.filter(item => item.serviceName !== serviceName));
            } else {
                alert("Failed to proceed with the order");
            }
        } catch (error) {
            console.error("Error proceeding with the order:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    const handleCancel = async (serviceName) => {
        try {
            const response = await fetch("http://localhost:3000/api/cancel-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, serviceName }),  // Pass the unique item ID
            });

            const data = await response.json();
            if (data.success) {
                alert("Order successfully canceled!");
                setCartItems(cartItems.filter(item => item.serviceName !== serviceName));
            } else {
                alert("Failed to cancel the order");
            }
        } catch (error) {
            console.error("Error canceling the order:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="w-full h-[73px] bg-[#8a8acd]"></div>
            <div className="min-h-screen pt-16 mb-[32px]">
                <div className="container flex justify-center flex-col gap-10">
                    <div className="text-5xl text-black justify-center items-center">
                        <h1 className="text-black">Product Details</h1>
                    </div>
                    <div className="flex justify-between gap-2 flex-wrap">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item._id} className="bg-light w-[350px] p-10">
                                    <div className="flex flex-col gap-3">
                                        <div>Service Name: {item.serviceName}</div>
                                        <div>Service Price: {item.servicePrice}</div>
                                        <div className="flex justify-between">
                                            <button
                                                className="text-white px-4 py-1 rounded-full bg-green-400"
                                                onClick={() => handleProceed(item.serviceName, item.servicePrice)}
                                            >
                                                Proceed
                                            </button>
                                            <button
                                                className="text-white px-4 py-1 rounded-full bg-red-400"
                                                onClick={() => handleCancel(item.serviceName)}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No items in your cart</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;