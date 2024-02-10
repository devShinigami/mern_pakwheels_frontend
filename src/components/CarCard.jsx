import React from "react";

const CarCard = () => {
  return (
    <main className="flex flex-col w-56 justify-center cursor-pointer">
      <div className="w-56 relative">
        <p className="absolute top-0 left-0 bg-red-700 px-2 text-gray-200 uppercase ">
          Featured
        </p>
        <img
          src="https://cache2.pakwheels.com/ad_pictures/8816/Slide_hyundai-tucson-awd-a-t-ultimate-2022-88168355.webp"
          alt=""
        />
      </div>
      <div className="flex flex-col p-2 justify-start bg-white">
        <p className="text-lg font-semibold text-blue-900">
          Hyundai Tucson 2022
        </p>
        <p className="text-green-600">PKR 8,800,000</p>
        <p className="text-gray-400">Faisalabad</p>
      </div>
    </main>
  );
};

export default CarCard;
