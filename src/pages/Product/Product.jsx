import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fish_test from "../../assets/img/betta_fish.jpg";

function Product({ props }) {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
    if (quantity === 0) {
      setQuantity(0);
    }
  };
  return (
    <>
      <div className="w-full md:mx-56 mx-2 flex justify-start">
        <button
          className="p-4 bg-primary hover:bg-secondary text-white rounded-md"
          onClick={() => navigate(-1)}
        >
          Back To Shop
        </button>
      </div>
      <div className="bg-gray-100 my-4">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img className="w-full" src={fish_test} alt="name" />
            </div>
            <div className="md:w-1/2 px-4 py-6 sm:px-0">
              <div className="px-4 py-6 sm:px-0">
                <h1 className="text-3xl font-bold text-gray-900">Name</h1>
                <p className="mt-1 text-lg text-gray-500">Description</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">
                  $51.18
                </p>
              </div>
              <div>
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <div className="">
                <button className="p-4 bg-primary hover:bg-secondary text-white rounded-md ">
                  Add to Cart
                </button>
                <button className="p-4 outline outline-primary hover:outline-secondary text-primary m-3 rounded-md">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
