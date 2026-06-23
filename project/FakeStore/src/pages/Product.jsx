import React from "react";

const Product = () => {
  return (
    <>
      <div className="p-10 grid grid-cols-4">
        <div className="w-75 border rounded h-100 p-5 flex flex-col items-center">

       
          <div className="w-full h-40">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          
          <div className="text-center mt-4">
            <span className="text-xl font-semibold block mb-2">
              Description
            </span>

            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              id?
            </p>

            <button className="bg-orange-400 rounded-full px-6 py-2 hover:bg-orange-500 hover:scale-105 transition duration-300 ">
              Add to cart
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Product;