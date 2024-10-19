import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[73px] bg-[#8a8acd]"></div>
      <div className="min-h-screen pt-16 mb-[32px] hero-back">
        <div className="container flex flex-col gap-10">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-5">
                  <p className="text-4xl font-bold ">Cart</p>
                  <p>Your cart is empty.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
