import React from "react";
import { useParams } from "react-router-dom";
function Product({ props }) {
  let { id } = useParams();

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img className="w-full" src="/logo512.png" alt="name" />
          </div>
          <div className="md:w-1/2 px-4 py-6 sm:px-0">
            <h1 className="text-3xl font-bold text-gray-900">Name</h1>
            <p className="mt-1 text-lg text-gray-500">Description</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">$51.18</p>
          </div>
        </div>
        <div>
          <button className="p-4 bg-primary hover:bg-secondary text-white rounded-md ">
            Add to Cart
          </button>
          <button className="p-4 outline outline-primary hover:outline-secondary text-primary m-3 rounded-md">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
