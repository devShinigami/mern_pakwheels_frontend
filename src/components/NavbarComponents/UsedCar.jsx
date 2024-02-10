import {
  BriefcaseIcon,
  BuildingStorefrontIcon,
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  ShieldCheckIcon,
  StarIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { AiOutlineCar } from "react-icons/ai";
import { Link } from "react-router-dom";

const UsedCar = () => {
  const cities = [
    "Multan",
    "Lahore",
    "Islamabad",
    "Karachi",
    "Rawalpindi",
    "Peshawar",
    "Faislabad",
    "Gujranwala",
  ];

  const popularModels = [
    "Toyota Corolla",
    "Honda Civic",
    "Honda City",
    "Suzuki Cultus",
    "Suzuki Mehran",
    "Toyota Vitz",
    "Suzuki Alto",
    "Toyota Parado",
  ];
  return (
    <main className="w-full flex">
      <div className="flex flex-col justify-start border-r-2 border-gray-400/30">
        <Link to={"/used-cars-in-pakistan"}>
          <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
            <MagnifyingGlassIcon className="w-4 h-4 mt-2" />
            <p className="text-lg ">
              Find used cars for sale
              <p className="text-sm">Search from over 110k options</p>
            </p>
          </aside>
        </Link>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <StarIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            Featured used cars
            <p className="text-sm">view featured cars by PakWheels</p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <BuildingStorefrontIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            Used cars dealers
            <p className="text-sm">Find used cars dealers near you</p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <TagIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            Sell your car
            <p className="text-sm ">Pot a free ad and sell yor car quickly</p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <CalculatorIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            Price calculator
            <p className="text-sm ">Calculate the market price of Cars</p>
          </p>
        </aside>
      </div>
      <div className="flex flex-col justify-start  border-r-2 border-gray-400/30 w-1/3">
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <ShieldCheckIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            PakWheels certified cars
            <p className="text-sm w-3/4">
              Cars with the Pakwheels seal of approval
            </p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <HandThumbUpIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            PakWheels car inspection
            <p className="text-sm w-3/4">
              Car with detailed PakWheels inspection report
            </p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <BriefcaseIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            PakWheels sell it for me
            <p className="text-sm w-3/4">
              Let PakWheels sell your car hassle free for you
            </p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <ClipboardDocumentCheckIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            Auction sheet verification
            <p className="text-sm w-3/4">
              Authentic auction sheets for your peace of mind
            </p>
          </p>
        </aside>
      </div>
      <div className=" flex flex-col justify-start m-4">
        <p className="text-lg flex pb-3 gap-1 items-center  ">
          <MapPinIcon className="w-4 h-4" />
          Popular Cities
        </p>
        {cities.map((city) => (
          <p className="p-2 hover:text-blue-600 cursor-pointer">{city}</p>
        ))}
      </div>
      <div className="flex flex-col justify-start  m-4">
        <p className="text-lg flex gap-1 pb-3 items-center  ">
          <AiOutlineCar className="w-4 h-4" />
          Popular Models
        </p>
        {popularModels.map((model) => (
          <p className="p-2 hover:text-blue-600 cursor-pointer">{model}</p>
        ))}
      </div>
    </main>
  );
};

export default UsedCar;
