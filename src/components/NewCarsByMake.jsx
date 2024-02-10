import React from "react";
import { brands } from "../utils/Brands";

const NewCarsByMake = () => {
  return (
    <section className="bg-gray-200 pt-8 ">
      <main className="max-w-5xl mx-auto mt-4">
        <p className="text-2xl font-semibold">New Cars by Make</p>
        <section className="flex flex-wrap items-center justify-center gap-12 p-4">
          {brands.map((brand, ind) => (
            <main className="flex flex-col justify-center items-center p-3    cursor-pointer hover:text-blue-700 text-blue-900 ">
              <div className="bg-white overflow-hidden rounded-full">
                <img className="w-20 object-contain" src={brand.img} alt="" />
              </div>
              <p className="text-lg font-semibold  ">
                {brand.name.substring(0, 9)}
              </p>
            </main>
          ))}
        </section>
      </main>
    </section>
  );
};

export default NewCarsByMake;
