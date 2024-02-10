import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const UsedCarCard = () => {
  return (
    <>
      <Link to={`/used-car/1231244423`} className="w-full">
        <section className="flex p-2 w-full gap-2 bg-white  hover:shadow-xl cursor-pointer transition-all duration-150">
          <img
            className="w-44 h-36 object-cover"
            src="https://cache1.pakwheels.com/ad_pictures/8832/tn_toyota-raize-z-5-2023-88329973.webp"
            alt=""
          />
          <aside className="w-full px-2">
            <main className="flex items-center justify-between">
              <p className="text-blue-900 text-lg font-semibold">
                Toyota Raize 2023 for sale
              </p>
              <p className="text-xl font-semibold">PKR 58 lacs</p>
            </main>
            <p>Lahore</p>
            <main className="flex justify-start items-center text-sm gap-4">
              <p>2023 </p>
              <p>28,300 km</p>
              <p>Petrol</p>
              <p>1000cc</p>
              <p>Automatic</p>
            </main>
            <main className="flex justify-between items-center my-2">
              <p className="text-sm">Updated 1 minute ago</p>
              <section className="flex items-center gap-2">
                <button className="border-black border p-1 bg-gray-100">
                  <HeartIcon className="w-4" />
                </button>
                <button className="bg-green-600 text-white px-2 text-sm py-1">
                  Show Phone No.
                </button>
              </section>
            </main>
          </aside>
        </section>
      </Link>
    </>
  );
};

export default UsedCarCard;
