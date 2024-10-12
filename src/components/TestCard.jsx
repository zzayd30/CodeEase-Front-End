// TestimonialCard.js
import React from "react";

const TestCard = ({ Icon, detail, heading }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Icon className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">{heading}</h3>
            <p className="text-gray-700 text-center">{detail}</p>
        </div>
    );
};

export default TestCard;
