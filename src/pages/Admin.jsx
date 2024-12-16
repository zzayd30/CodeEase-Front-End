import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import axios from 'axios';

const Admin = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState("add");
    const [formInputs, setFormInputs] = useState({
        category: "Web Development",
        serviceName: "",
        serviceDescription: "",
        servicePrice: "",
    });
    const [orders, setOrders] = useState([]);
    const [teamMembers, setTeamMembers] = useState([]);
    const [services, setServices] = useState([]);
    const [selectedMembers, setSelectedMembers] = useState({});
    const [isAssigned, setIsAssigned] = useState({});
    const handleChangeAssign = async (e, serviceName, userEmail, orderId) => {
        const selectedEmail = e.target.value;

        // Update frontend state for selected member
        setSelectedMembers((prev) => ({
            ...prev,
            [orderId]: selectedEmail,
        }));

        const orderDetails = {
            assignedTo: selectedEmail,
            whoseOrder: userEmail,
            orderType: serviceName,
            orderId,
            status: "Assigned",
        };

        console.log("Order Details: ", orderDetails);

        if (userEmail) {
            try {
                const response = await axios.put("http://localhost:3000/api/assignToTeam", {
                    selectedEmail,
                    orderDetails
                });

                if (response.status === 200) {
                    // Update the state after a successful assignment
                    setOrders((prevOrders) =>
                        prevOrders.map((order) =>
                            order._id === orderId
                                ? { ...order, assignedTo: selectedEmail, status: "Assigned" }
                                : order
                        )
                    );

                    setIsAssigned((prev) => ({
                        ...prev,
                        [orderId]: true,
                    }));
                    toast.success("Assigned successfully!");
                } else {
                    toast.error("Assignment failed. Please try again.")
                }
            } catch (error) {
                console.error("Error assigning member:", error);
                toast.error("An error occurred while assigning the order.");
            }
        }
    };

    const fetchTeamMembers = async () => {
        try {
            const response = await axios.get("http://localhost:3000/GetTeamMembers"); // Ensure full API URL
            if (response.data.type === "success") {
                setTeamMembers(response.data.teamMembers);
            } else {
                console.error("Failed to fetch team members:", response.data.message);
            }
        } catch (err) {
            console.error("Error fetching team members:", err);
        }
    };

    const fetchServices = () => {
        axios.get('http://localhost:3000/services')
            .then((response) => {
                if (response.data.success) {
                    setServices(response.data.services);
                } else {
                    toast.error("Failed to load services.", {
                        position: "bottom-right",
                        autoClose: 2000,
                        theme: "light",
                        transition: Bounce,
                    });
                }
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
                toast.error("An error occurred while loading services.", {
                    position: "bottom-right",
                    autoClose: 2000,
                    theme: "light",
                    transition: Bounce,
                });
            });
    };

    const fetchOrders = () => {
        axios.get('http://localhost:3000/api/orders-all')
            .then((response) => {
                if (response.data.success) {
                    setOrders(response.data.orders);
                } else {
                    toast.error("Error fetching orders.", {
                        position: "bottom-right",
                        autoClose: 2000,
                        theme: "light",
                        transition: Bounce,
                    });
                }
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
                toast.error("Failed to fetch orders.", {
                    position: "bottom-right",
                    autoClose: 2000,
                    theme: "light",
                    transition: Bounce,
                });
            });
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleRemoveService = async (serviceName) => {
        try {
            const response = await fetch('http://localhost:3000/api/remove-service', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ serviceName }),
            });

            const result = await response.json();

            if (response.ok) {
                setServices((prevServices) =>
                    prevServices.filter((service) => service.serviceName !== serviceName)
                );
                alert(result.message);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error removing service:', error);
            alert('An error occurred while removing the service.');
        }
    };

    // Handle form submission for adding services
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/AddService", formInputs)
            .then((response) => {
                if (response.data.type === "success") {
                    toast.success("Service Added Successfully!", {
                        position: "bottom-right",
                        autoClose: 2000,
                        theme: "light",
                        transition: Bounce,
                    });

                    // Clear form inputs
                    setFormInputs({
                        category: "Web Development",
                        serviceName: "",
                        serviceDescription: "",
                        servicePrice: "",
                    });
                } else {
                    toast.error("Failed to add service. Please try again.", {
                        position: "bottom-right",
                        autoClose: 2000,
                        theme: "light",
                        transition: Bounce,
                    });
                }
            })
            .catch((error) => {
                console.error("Error inserting service:", error);
                toast.error("An error occurred while adding the service.", {
                    position: "bottom-right",
                    autoClose: 2000,
                    theme: "light",
                    transition: Bounce,
                });
            });
    };
    const handleDeliverOrder = async (orderId) => {
        try {
            const response = await axios.put('http://localhost:3000/api/orders/deliver', {
                orderId,
                status: "Delivered",
            });

            if (response.data.success) {
                // Update the status in the local state
                setOrders((prevOrders) =>
                    prevOrders.map((order) =>
                        order._id === orderId ? { ...order, status: "Delivered" } : order
                    )
                );

                toast.success(response.data.message, {
                    position: "bottom-right",
                    autoClose: 2000,
                    theme: "light",
                    transition: Bounce,
                });
            } else {
                toast.error(response.data.message, {
                    position: "bottom-right",
                    autoClose: 2000,
                    theme: "light",
                    transition: Bounce,
                });
            }
        } catch (error) {
            console.error("Error marking order as delivered:", error);
            toast.error("An error occurred while updating the order.", {
                position: "bottom-right",
                autoClose: 2000,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    const handleCancelOrder = async (orderId) => {
        try {
            const response = await axios.put('http://localhost:3000/api/orders/cancel', {
                orderId,
                status: "Cancelled",
            });

            if (response.data.success) {
                // Update the status in the local state
                setOrders((prevOrders) =>
                    prevOrders.map((order) =>
                        order._id === orderId ? { ...order, status: "Cancelled" } : order
                    )
                );

                toast.success(response.data.message, {
                    position: "bottom-right",
                    autoClose: 2000,
                    theme: "light",
                    transition: Bounce,
                });
            } else {
                toast.error(response.data.message, {
                    position: "bottom-right",
                    autoClose: 2000,
                    theme: "light",
                    transition: Bounce,
                });
            }
        } catch (error) {
            console.error("Error cancelling order:", error);
            toast.error("An error occurred while updating the order.", {
                position: "bottom-right",
                autoClose: 2000,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    // Log out functionality
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
        fetchTeamMembers();
        fetchServices();
    }, [show]);

    return (
        <>
            {/* Header */}
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

            {/* Add Services Button */}
            <div className="mt-20 container mx-auto text-2xl text-black font-bold text-center">
                <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded shadow-md hover:bg-indigo-700"
                    onClick={() => setShow("Add")}
                >
                    Add Services
                </button>
                <button
                    className="bg-indigo-600 ml-3 text-white px-4 py-2 rounded shadow-md hover:bg-indigo-700"
                    onClick={() => setShow("order")}
                >
                    Show Orders
                </button>
                <button
                    className="bg-indigo-600 ml-3 text-white px-4 py-2 rounded shadow-md hover:bg-indigo-700"
                    onClick={() => setShow("Services")}
                >
                    Show Services
                </button>
            </div>

            {/* Conditional Rendering */}
            {show === "order" && (
                <div className="min-h-screen pt-16">
                    <div className="container mx-auto flex flex-col items-center gap-10">
                        <h1 className="text-5xl text-black font-bold">Orders Details</h1>
                        <div className="flex flex-wrap justify-center gap-6">
                            {orders.length === 0 ? (
                                <div>No orders available.</div>
                            ) : (
                                orders.map((order) => (
                                    <div
                                        key={order._id}
                                        className="bg-gray-100 shadow-md rounded-lg p-6 w-[350px]"
                                    >
                                        <div className="flex flex-col gap-3 text-black">
                                            <div>Order Type: {order.Order[0].serviceName}</div>
                                            <div>User: {order.UserEmail}</div>
                                            <div>Status: {order.status || "Pending"}</div>
                                            <div>Assigned To: {order.assignedTo || "Not Assigned"}</div>
                                            <div>Total: ${order.Total}</div>

                                            <div className="flex flex-wrap items-center gap-4 justify-between w-full mt-4">
                                                <button
                                                    onClick={() => handleDeliverOrder(order._id)}
                                                    className="bg-green-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-600 transition duration-300"
                                                    disabled={order.status !== "Completed"}  // Disable if status is not "Completed"
                                                >
                                                    Deliver
                                                </button>

                                                <div className="flex-grow max-w-sm">
                                                    <select
                                                        onChange={(e) =>
                                                            handleChangeAssign(
                                                                e,
                                                                order.Order[0].serviceName,
                                                                order.UserEmail,
                                                                order._id
                                                            )
                                                        }
                                                        value={selectedMembers[order._id] || ""}
                                                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition"
                                                        disabled={order.assignedTo ? true : false}  // Disable when assignedTo is not empty
                                                    >
                                                        <option value="">Assign To</option>
                                                        {teamMembers.map((member) => (
                                                            order.Order[0].serviceName === member.team_type && (
                                                                <option key={member.email} value={member.email}>
                                                                    {member.username} - {member.team_type}
                                                                </option>
                                                            )
                                                        ))}
                                                    </select>
                                                </div>
                                                <button disabled={order.status === "Completed" || order.status === "Delivered"}
                                                    onClick={() => handleCancelOrder(order._id)}
                                                    className="bg-red-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-red-600 transition duration-300"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
            {show === "Services" && (
                <div className="min-h-screen pt-16">
                    <div className="container mx-auto flex flex-col items-center gap-10">
                        <h1 className="text-5xl text-black font-bold">Services Details</h1>
                        <div className="flex flex-wrap justify-center gap-6">
                            {services.length === 0 ? (
                                <div>No services available.</div>
                            ) : (
                                services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-100 shadow-md rounded-lg p-6 w-[350px]"
                                    >
                                        <div className="flex flex-col gap-3 text-black">
                                            <div>
                                                <span className="font-bold">Service Name:</span>{" "}
                                                {service.serviceName}
                                            </div>
                                            <div>
                                                <span className="font-bold">Category:</span>{" "}
                                                {service.category}
                                            </div>
                                            <div>
                                                <span className="font-bold">Description:</span>{" "}
                                                {service.serviceDescription}
                                            </div>
                                            <div>
                                                <span className="font-bold">Price:</span> $
                                                {service.servicePrice}
                                            </div>
                                            <div className="flex justify-between mt-3">
                                                <button
                                                    className="bg-red-400 text-white px-4 py-1 rounded-full hover:bg-red-500"
                                                    onClick={() => handleRemoveService(service.serviceName)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
            {show === "Add" && (
                <div className="min-h-screen container mx-auto pt-16 mb-8 px-4">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto space-y-6"
                    >
                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-2">
                                Select Category
                            </label>
                            <select
                                name="category"
                                value={formInputs.category}
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="Web Development">Web Development</option>
                                <option value="Software Development">Software Development</option>
                                <option value="App Development">App Development</option>
                                <option value="Cyber Security">Cyber Security</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-2">
                                Service Name
                            </label>
                            <input
                                type="text"
                                name="serviceName"
                                value={formInputs.serviceName}
                                onChange={handleChange}
                                placeholder="Enter Service Name"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 p-2 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-2">
                                Service Description
                            </label>
                            <textarea
                                name="serviceDescription"
                                value={formInputs.serviceDescription}
                                onChange={handleChange}
                                placeholder="Enter Service Description"
                                className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                rows="3"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-2">
                                Service Price
                            </label>
                            <input
                                type="number"
                                name="servicePrice"
                                value={formInputs.servicePrice}
                                onChange={handleChange}
                                placeholder="49.99"
                                className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-indigo-700"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Toast Notifications */}
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                theme="light"
                transition={Bounce}
            />
        </>
    );
};

export default Admin;
