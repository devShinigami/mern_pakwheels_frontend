import React from "react";
import { BsCheck } from "react-icons/bs";
const Advertisement = () => {
  return (
    <section className="min-h-fit max-w-4xl mx-auto text-center space-y-2 my-12 ">
      <aside className="flex w-full justify-between relative  border-2 border-gray-200 p-4 ">
        <p className="font-semibold text-2xl absolute -top-5 bg-white left-40">
          Sell Your Car on PakWheels and Get the Best Price
        </p>
        <main className="flex flex-col justify-center gap-2">
          <p className="text-blue-900 font-semibold text-xl">
            Post your Ad on PakWheels
          </p>
          <aside className="flex gap-2 items-center">
            <BsCheck className="h-6 w-6 text-green-600" />
            <p>Post your Ad for free in 3 easy steps</p>
          </aside>
          <aside className="flex gap-2 items-center">
            <BsCheck className="h-6 w-6 text-green-600" />
            <p>Get Geniune offers from verified Buyers</p>
          </aside>
          <aside className="flex gap-2 items-center">
            <BsCheck className="h-6 w-6 text-green-600" />
            <p>Sell your car Fast at the Best Price</p>
          </aside>
          <button className="bg-red-700 w-1/2 px-4 py-2 text-white rounded-md">
            Post Your Ad
          </button>
        </main>
        <div class="absolute left-[47%] flex   w-0.5 h-5/6 bg-gray-200 items-center justify-center">
          <p className="bg-white text-gray-400 font-bold text-lg">OR</p>
        </div>
        <main className="flex flex-col gap-2 my-2">
          <p className="text-blue-900 text-start ml-8 font-semibold text-xl">
            Try PakWheels Sell It For Me
          </p>
          <aside className="flex gap-2 items-center">
            <BsCheck className="h-6 w-6 text-green-600" />
            <p>Dedicated Sales Expert to Sell your Car</p>
          </aside>
          <aside className="flex gap-2 items-center">
            <BsCheck className="h-6 w-6 text-green-600" />
            <p>We Bargain for your and share the best offer</p>
          </aside>
          <aside className="flex gap-2 items-center">
            <BsCheck className="h-6 w-6 text-green-600" />
            <p>We ensure Safe and Secure transaction</p>
          </aside>
          <button className="bg-sky-600 w-1/2 px-4 py-2 text-white rounded-md">
            Register Your Car
          </button>
        </main>
      </aside>
    </section>
  );
};

export default Advertisement;
