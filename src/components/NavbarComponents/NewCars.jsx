import {
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { BiSolidCarGarage } from "react-icons/bi";
import { GoGitCompare } from "react-icons/go";
import { FaRoad } from "react-icons/fa";
import { HiClipboardCheck } from "react-icons/hi";
import { AiOutlineCar } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewCars = () => {
  const popularBrands = [
    "Honda Cars",
    "KIA Cars",
    "Hyundai Cars",
    "Changan Cars",
    "MG Cars",
    "Audi Cars",
    "Suzuki Cars",
    "Toyota Cars",
    "BMW Cars",
  ];

  const popularNewCars = [
    "Toyota Corolla",
    "Toyota Yaris",
    "Changan Alsvin",
    "Suzuki Wagon-R",
    "KIA Sportage",
    "Honda Civic",
    "Honda City",
    "Suzuki Cultus",
    "Suzuki Alto",
  ];
  return (
    <main className="w-full flex z-40">
      <div className="flex flex-col justify-start border-r-2 border-gray-400/30">
        <Link to={"/new-cars"}>
          <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
            <MagnifyingGlassIcon className="w-4 h-4 mt-2" />
            <p className="text-lg ">
              Find new cars in Pakistan
              <p className="text-sm">See new cars in Pakistan</p>
            </p>
          </aside>
        </Link>
        <Link to={"/new-cars-comparison"}>
          <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
            <GoGitCompare className="w-4 h-4 mt-2" />
            <p className="text-lg ">
              Car comparison
              <p className="text-sm">Compare cars and find thier differences</p>
            </p>
          </aside>
        </Link>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <ChatBubbleLeftRightIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            Reviews
            <p className="text-sm">Read reviews of all cars in Pakistan</p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <TagIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            Prices
            <p className="text-sm ">See prices of new cars</p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <FaRoad className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            On road prices
            <p className="text-sm ">Calculate the total cost of new car</p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <HiClipboardCheck className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            New car dealers
            <p className="text-sm ">find new car dealers</p>
          </p>
        </aside>
      </div>
      <div className=" flex flex-col justify-start pr-6 m-4 ">
        <p className="text-lg flex pb-3 gap-1 items-center  ">
          <BiSolidCarGarage className="w-4 h-4" />
          Popular Brands
        </p>
        {popularBrands.map((brand) => (
          <p className="p-2 hover:text-blue-600 cursor-pointer">{brand}</p>
        ))}
      </div>
      <div className="flex flex-col justify-start pr-6 m-4">
        <p className="text-lg flex gap-1 pb-3 items-center  ">
          <AiOutlineCar className="w-4 h-4" />
          Popular new cars
        </p>
        {popularNewCars.map((car) => (
          <p className="p-2 hover:text-blue-600 cursor-pointer">{car}</p>
        ))}
      </div>
    </main>
  );
};

export default NewCars;
