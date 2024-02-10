import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <Link to={`/used-car/1231244423`} className="w-full">
        <section className="flex p-2 w-full gap-2 bg-white  hover:shadow-xl cursor-pointer transition-all duration-150 group/card">
          <img
            className="w-44 h-36 object-contain"
            src="https://cache2.pakwheels.com/ad_pictures/8928/tn_big-d-car-air-freshener-2-in-1-fragrance-and-odour-neutraliser-ocean-spray-89280456.webp"
            alt=""
          />
          <aside className="w-full px-2">
            <main className="flex justify-between ">
              <p className="text-blue-900 w-5/6 text-md font-semibold group-hover/card:text-blue-600 group/card">
                Micro Fiber Cleaning Cloth Double Side Yellow And Gray - Pack Of
                3
              </p>
              <p className=" text-xl font-semibold">PKR 1,140</p>
            </main>
            <main className="flex justify-start items-center text-sm gap-2">
              <p>Car Care</p>
              <span className="mb-1 font-extrabold text-lg">.</span>
              <p>Car air freshener</p>
            </main>
            <main className="flex justify-between items-center my-2">
              <button className="text-sm border group border-gray-200 px-4">
                <HeartIcon className="w-4 group-hover:first:text-red-600 inline-block mb-1 mx-1 " />
                Save Ad
              </button>
              <section className="flex items-center gap-2">
                <button className="border-blue-600 text-blue-600 border px-2 py-1 text-sm">
                  Add to Cart
                </button>
                <button className="bg-blue-800 border border-blue-800 text-white px-2 text-sm py-1">
                  Buy Now
                </button>
              </section>
            </main>
          </aside>
        </section>
      </Link>
    </>
  );
};

export default ProductCard;
